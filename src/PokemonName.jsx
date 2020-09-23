import React from "react"
import { createFragmentContainer } from "react-relay";
import graphql from 'babel-plugin-relay/macro';

function PokemonName({pokemon}) {
  return (
    <div>{pokemon.name}</div>
  );
}

export default createFragmentContainer(PokemonName, {
  pokemon: graphql`
    # This fragment is declaring that this component
    # needs an Artist, and these specific fields on
    # the Artist in order to render. Relay will
    # guarantee that this data is fetched and available
    # for this component.
    fragment PokemonName_pokemon on Pokemon {
      name      
    }
  `,
});