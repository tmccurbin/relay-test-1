/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PokedexQueryVariables = {||};
export type PokedexQueryResponse = {|
  +pokemon: {|
    +name: string,
    +type: string,
  |}
|};
export type PokedexQuery = {|
  variables: PokedexQueryVariables,
  response: PokedexQueryResponse,
|};
*/


/*
query PokedexQuery {
  pokemon {
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
    "name": "pokemon",
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
    "name": "PokedexQuery",
    "selections": (v0/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PokedexQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e73f065dc11be2f4f024ed199aed4a2a",
    "id": null,
    "metadata": {},
    "name": "PokedexQuery",
    "operationKind": "query",
    "text": "query PokedexQuery {\n  pokemon {\n    name\n    type\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '94f27634a1c2cb93a43599a3951ac5ed';

module.exports = node;
