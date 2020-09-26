import { fetchQuery } from 'relay-runtime';
import graphql from 'babel-plugin-relay/macro';
import subscriptionEnvironment from './subscriptionEnvironment';

const query = graphql`
  subscription NewPokemonSubscription {
    newPokemon {
      name
      type
    }
  }
`;

function NewPokemon(operation, variables) {
    console.log('Running NewPokemon function')
    return fetchQuery(subscriptionEnvironment, query, variables)
    .then(data => {
        // access the graphql response
        console.log('We got some data')
        console.log(data)
    });

    /*
    return fetch('http://playground.tyrell.me:3000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json();
    });
    */
}

export default NewPokemon;