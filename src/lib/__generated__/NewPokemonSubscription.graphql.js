/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewPokemonSubscriptionVariables = {||};
export type NewPokemonSubscriptionResponse = {|
  +newPokemon: {|
    +name: string,
    +type: string,
  |}
|};
export type NewPokemonSubscription = {|
  variables: NewPokemonSubscriptionVariables,
  response: NewPokemonSubscriptionResponse,
|};
*/


/*
subscription NewPokemonSubscription {
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
    "name": "NewPokemonSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NewPokemonSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "23b5f704f4b5ebd6400ad4b9b5935a19",
    "id": null,
    "metadata": {},
    "name": "NewPokemonSubscription",
    "operationKind": "subscription",
    "text": "subscription NewPokemonSubscription {\n  newPokemon {\n    name\n    type\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '757879a4e4b44780961a5e79f1b0b2c8';

module.exports = node;
