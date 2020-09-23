import React from "react"
import { QueryRenderer } from "react-relay"
import environment from "./lib/createRelayEnvironment"
import PokemonName from "./PokemonName";
import PokemonType from "./PokemonType";
import graphql from 'babel-plugin-relay/macro';

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