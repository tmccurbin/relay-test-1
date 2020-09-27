import React from "react";
import { QueryRenderer } from "react-relay";
import environment from "./lib/createRelayEnvironment";
import PokemonName from "./PokemonName";
import PokemonType from "./PokemonType";
import graphql from 'babel-plugin-relay/macro';
import Pokedex from './Pokedex';

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
                  <h1>Using Subscriptions</h1>
                  <Pokedex />
                  <h1>Using Queries</h1>
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