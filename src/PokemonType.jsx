import React from "react"
import { createFragmentContainer } from "react-relay";
import graphql from 'babel-plugin-relay/macro';

function PokemonType({pokemon}) {
  return (
    <div>{pokemon.type}</div>
  );
}

export default createFragmentContainer(PokemonType, {
  pokemon: graphql`
    # This fragment is declaring that this component
    # needs an Artist, and these specific fields on
    # the Artist in order to render. Relay will
    # guarantee that this data is fetched and available
    # for this component.
    fragment PokemonType_pokemon on Pokemon {
      type      
    }
  `,
});