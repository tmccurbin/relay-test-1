import {
    Network,
    Observable
} from 'relay-runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import NewPokemon from './NewPokemon';


const subscriptionClient = new SubscriptionClient('ws://playground.tyrell.me:4000/graphql', {
    reconnect: true,
});

const subscribe = (request, variables) => {
    console.log('Running the subscribe function')
  const subscribeObservable = subscriptionClient.request({
      query: request.text,
      operationName: request.name,
      variables,
  });
  // Important: Convert subscriptions-transport-ws observable type to Relay's
  return Observable.from(subscribeObservable);
};

const subscriptionNetwork = Network.create(NewPokemon, subscribe);

export default subscriptionNetwork;