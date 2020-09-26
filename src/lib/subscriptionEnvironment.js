import {
    Environment,
    RecordSource,
    Store,
} from 'relay-runtime';
import subscriptionNetwork from './subscriptionNetwork';

const subscriptionEnvironment = new Environment({
    network: subscriptionNetwork,
    store: new Store(new RecordSource()),
});

export default subscriptionEnvironment;