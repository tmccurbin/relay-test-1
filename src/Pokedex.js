import React, { useEffect, useState } from "react";
import { requestSubscription } from 'react-relay';
import subscriptionEnvironment from './lib/subscriptionEnvironment';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from "react-relay";
import environment from "./lib/createRelayEnvironment";
import { fetchQuery } from 'relay-runtime';

// This is a functional component
function Pokedex() {
    // Initialize state
    const [pokemon, setPokemon] = useState(null);

    // Run this method only once (on mount)
    useEffect(() => {
        // Define a method to fetch initial data
        async function fetchInitialData() {
            console.log('Fetching initial data')
            const query = graphql`
            query PokedexQuery {
                pokemon {
                    name
                    type
                }
            }`;

            // Make sure we retrieve the initial data before we subscribe to updates
            await fetchQuery(environment, query, {})
            .then(data => {
                console.log('We got data from initial fetch')
                console.log(data)

                // Update state
                setPokemon(data.pokemon);
            })

            // Return promise
            return new Promise((resolve, reject) => {
                resolve();
            })
        }
        // Fetch initial data, THEN subscribe
        fetchInitialData()
        .then(() => {
            console.log('Subscribing')
            const subscription = graphql`
            subscription PokedexSubscription {
            newPokemon {
                name
                type
            }
            }`;

            requestSubscription(
                subscriptionEnvironment, // see Environment docs
                {
                    subscription,
                    // optional but recommended:
                    onCompleted: () => {/* server closed the subscription */},
                    onError: error => console.error(error),
                    onNext: (response => {}),
                    updater: (store, data) => {
                        console.log('Running the updater event handler');
                        setPokemon(data.newPokemon);
                    }
                }
            );
        })
    }, []);
    
    if (pokemon) {
        console.log('pokemon is defined')
        return (
            <div>
                <h2>{pokemon.name}</h2>
                Type: {pokemon.type}
            </div>
        );
    }
    console.log('pokemon is not defined')
    return (<div>Loading...</div>)
}

export default Pokedex;