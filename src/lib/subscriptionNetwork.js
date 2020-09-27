import {
    Network,
    Observable
} from 'relay-runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws';

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

// I believe the first argument is the network layer for queries
// The second argument seems to be the network layer for subscriptions (a subscription method)
const subscriptionNetwork = Network.create(null, subscribe);

export default subscriptionNetwork;