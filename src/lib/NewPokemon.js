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
}

export default NewPokemon;