const { PubSub } = require('graphql-subscriptions')
const gql = require('graphql-tag')
const { makeExecutableSchema } = require('graphql-tools')

const pubsub = new PubSub()

const typeDefs = gql`
    type Query {
        pokemon: Pokemon!
    }

    type Pokemon{
        name: String!
        type: String!
    }

    type Subscription{
        newPokemon: Pokemon!
    }
`;

const resolvers = {
    Subscription: {
        newPokemon: {
            subscribe: () => {
                console.log('The resolver is running!');
                return pubsub.asyncIterator('newPokemon');
            }
        }

    }
}


exports.pubsub = pubsub;
exports.schema = makeExecutableSchema({ typeDefs, resolvers });