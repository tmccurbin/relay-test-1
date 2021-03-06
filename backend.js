const express = require('express');
const app = express();
const { pubsub, schema:subscriptionSchema } = require('./subscription');

/**
This is a GraphQL package that can be used as middleware
It allows us to point at a schema, some resolvers, route requests to a parser 
 */
const { graphqlHTTP } = require('express-graphql');

/**
 * This package will allow us to define the schema that follows the official GraphQL specifications
 * It converts the schema to JavaScript code
 * Then we can use this parsed schema with express-graphql
 * @buildSchema takes a javascript template literal string which defines our schema and converts it into a GraphQL object
 */
const { buildSchema, execute, subscribe } = require('graphql');

// We have to define two special keys: "query" and "mutation"
// Queries are for fetching data.
// Mutations are for changing data (including creation, updates, and deletion)
// The type names listed below are not strict, you can call them something else
// RootQuery, in this case, bundles all you supported queries
// RootMutation, in this case, bundles all your supported mutations
// You can also specify custom Types, like Alert in this case
// For now, I have avoided getting into the details of the types for Dates and rawData
// I could always change time to a String here, and return alert.time.$date in the rootValue.alerts field
const mySchemaString = `
    schema {
        query: RootQuery
        mutation: RootMutation
        subscription: Subscription
    }

    type Query {
        pokemon: Pokemon!
    }

    type Subscription {
        newPokemon: Pokemon!
    }

    type Pokemon {
        name: String!
        type: String!
    }

    type RootQuery {
        pokemon: Pokemon!
    }

    type RootMutation {
        createComment(commentText: String): String
        addPokemon(name: String!, type: String!): ID!
}
`;

// Websocket server
const { createServer } = require('http');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const WS_PORT = 4000;

const ws = createServer((req, res) => {
    res.writeHead(400);
    res.end();
})

ws.listen(WS_PORT, () => {
    console.log(`Websocket server listening on port ${WS_PORT}`);
});

const subscriptionServer = SubscriptionServer.create({
    schema: subscriptionSchema,
    execute,
    subscribe,
    onConnect: () => {
        console.log('A websocket client has connected');
    }
}, {server: ws, path: '/graphql'});

// Allow Cross-Origin Requests
// Adopted from https://www.youtube.com/watch?v=VdwH3RDRXNM at 22 minutes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

let pokemon = {
    name: "Charizard",
    type: "fire"
};

// Testing subscriptions. Every 3 seconds, show another pokemon
const pokedex = require('./Pokedex.json');
let pokedexIndex = 0;
setInterval(() => {
    // Format the pokemon object
    pokemon = {
        name: pokedex[pokedexIndex].name,
        type: `${pokedex[pokedexIndex].type_1}${pokedex[pokedexIndex].type_2 !== "-" ? ", " + pokedex[pokedexIndex].type_2 : ""}`
    }

    // Publish to client
    console.log(pokemon);
    pubsub.publish('newPokemon', {newPokemon: pokemon});


    if (pokedex[pokedexIndex + 1] === undefined) {
        // Reset the index
        pokedexIndex = 0;
    } else {
        // Incrememnt the index
        pokedexIndex += 1;
    }
}, 3000)

/**
 * Configure the GraphQL endpoint
 * Set graphiql to true in non-production environments
 * @schema points to a valid graphql schema
 * @rootValue points to an object which has all of the resolver functions in it
 * Resolver functions need to match our schema endpoints by name
 * If you have trouble retrieving the _id property, refer to the following video at the 29 minute mark
 * https://www.youtube.com/watch?v=sOUNgOx0GcU
 */
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: buildSchema(mySchemaString),
    rootValue: {
        pokemon: () => {
            return pokemon;
        },
        createComment: args => {
            return `The comment is: ${args.commentText}`;
        },
        addPokemon: args => {
            return `ID: ${args.name.toLowerCase()}-${args.type.toLowerCase()}`
        }
    }
}));

app.listen(3000, () => {
    console.log('Backend server listening on port 3000');
})
