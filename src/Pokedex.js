import React from "react";
import { requestSubscription } from 'react-relay';
import subscriptionEnvironment from './lib/subscriptionEnvironment';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from "react-relay";

// -------------------
//    Example Code
// -------------------

function Pokedex() {
    const subscription = graphql`
    subscription PokedexSubscription {
      newPokemon {
        name
        type
      }
    }`;

    const variables = {};

    requestSubscription(
        subscriptionEnvironment,
        {
            subscription,
            variables,
            onCompleted: () => {
                console.log(`running onCompleted event handler`);
            },
            onError: error => {
                console.log('There was an error with the subscription. The error follows:');
                console.error(error);
            },
            onNext: response => {
                console.log('onNext is running');
            },
            updater: (store, data) => {
                console.log('updater is running');
            }
        }
    );

    return (
        <QueryRenderer
            environment={subscriptionEnvironment}
            query={subscription}
            variables={{}}
            render={({ error, props }) => {
                if (error) {
                    return <div>{error.message}</div>;
                } else if (props) {
                    console.log('props')
                    console.log(props)
                    return (
                        <div>
                            <h2>{props.newPokemon.name}</h2>
                            Type: {props.newPokemon.type}
                        </div>
                    );
                }
                return <div>Loading</div>;
            }}
        />
    );
}

export default Pokedex;