/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PokemonComponentSubscriptionVariables = {||};
export type PokemonComponentSubscriptionResponse = {|
  +newPokemon: {|
    +name: string,
    +type: string,
  |}
|};
export type PokemonComponentSubscription = {|
  variables: PokemonComponentSubscriptionVariables,
  response: PokemonComponentSubscriptionResponse,
|};
*/


/*
subscription PokemonComponentSubscription {
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
    "name": "PokemonComponentSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PokemonComponentSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c08989376b7ea7c58f9fc902af1c07d0",
    "id": null,
    "metadata": {},
    "name": "PokemonComponentSubscription",
    "operationKind": "subscription",
    "text": "subscription PokemonComponentSubscription {\n  newPokemon {\n    name\n    type\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '786ecb5d021c2813ab6d946c347d248b';

module.exports = node;
