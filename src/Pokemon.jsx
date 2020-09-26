import React from "react";
import { QueryRenderer, requestSubscription } from "react-relay";
import environment from "./lib/createRelayEnvironment";
import subscriptionEnvironment from './lib/subscriptionEnvironment';
import PokemonName from "./PokemonName";
import PokemonType from "./PokemonType";
import graphql from 'babel-plugin-relay/macro';

// Instantiate the subscription query
// I believe you can name the subscription whatever you want
// So I named it PokemonComponentSubscription
const subscription = graphql`
    subscription PokemonComponentSubscription {
      newPokemon {
        name
        type
      }
    }
`

// -------------------
//    Example Code
// -------------------

const variables = {};

// The big question is whether to update the component in the updater or onNext property.
// Here are their descriptions:
// onNext: a callback function executed each time a response is received from the server, with the raw GraphQL response payload.
// updater: an optional function that can supply custom logic for updating the in-memory Relay store based on the server response.
requestSubscription(
  subscriptionEnvironment,
  {
      subscription,
      variables,
      onCompleted: () => {
        console.log(`running onCompleted event handler`);
      },
      onError: error => {
        console.log('There was an error with the subscription. The error follows:')
        console.error(error);
        console.log('That error has been logged')
      },
      onNext: response => {
        console.log('onNext is running. The following is the response:');
        console.log(response);
      },
      updater: (store, data) => {
        console.log('updater is running. The following is the store:');
        console.log(store);
        console.log('The following is the data:');
        console.log(data);
      }
  }
);


// Below you can usually use one query renderer per page
// and it represents the root of a query
export default function Pokemon() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query PokemonQuery {
          pokemon {
            ...PokemonName_pokemon
            ...PokemonType_pokemon
          }
        }
      `}
      variables={{}}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return (
              <div>
                  <PokemonName {...props} />
                  <PokemonType {...props} />
              </div>
          );
        }
        return <div>Loading</div>;
      }}
    />
  );
}