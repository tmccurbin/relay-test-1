/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PokedexSubscriptionVariables = {||};
export type PokedexSubscriptionResponse = {|
  +newPokemon: {|
    +name: string,
    +type: string,
  |}
|};
export type PokedexSubscription = {|
  variables: PokedexSubscriptionVariables,
  response: PokedexSubscriptionResponse,
|};
*/


/*
subscription PokedexSubscription {
  newPokemon {
    name
    type
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Pokemon",
    "kind": "LinkedField",
    "name": "newPokemon",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PokedexSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PokedexSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "39f5a2cb7e15a8e2a2f1d70a0f0ed40c",
    "id": null,
    "metadata": {},
    "name": "PokedexSubscription",
    "operationKind": "subscription",
    "text": "subscription PokedexSubscription {\n  newPokemon {\n    name\n    type\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b0b045402a72a40bb45e176161160e75';

module.exports = node;
