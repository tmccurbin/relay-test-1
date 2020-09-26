import React from 'react';
// import { useEffect, useState } from 'react';
import './App.css';

import Pokemon from './Pokemon';

function App() {

  /* FETCH EXAMPLE

  // This shows how to use graphql with fetch and relay
  // https://www.youtube.com/watch?v=zJvB2hnsXr0
  const [data, dataSet] = useState(null);

  // for useEffect we use an empty array as an argument to run on mount
  // The fetch call gets cleaned up at 7:50
  useEffect(() => {
    fetch("http://playground.tyrell.me:3000/graphql", {
      "headers": {
        "accept": "application/json",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json"
      },
      "referrer": "http://playground.tyrell.me:3000/",
      "referrerPolicy": "origin",
      "body": "{\"query\":\"# Welcome to GraphiQL\\n#\\n# GraphiQL is an in-browser tool for writing, validating, and\\n# testing GraphQL queries.\\n#\\n# Type queries into this side of the screen, and you will see intelligent\\n# typeaheads aware of the current GraphQL type schema and live syntax and\\n# validation errors highlighted within the text.\\n#\\n# GraphQL queries typically start with a \\\"{\\\" character. Lines that start\\n# with a # are ignored.\\n#\\n# An example GraphQL query might look like:\\n#\\n#     {\\n#       field(arg: \\\"value\\\") {\\n#         subField\\n#       }\\n#     }\\n#\\n# Keyboard shortcuts:\\n#\\n#  Prettify Query:  Shift-Ctrl-P (or press the prettify button above)\\n#\\n#     Merge Query:  Shift-Ctrl-M (or press the merge button above)\\n#\\n#       Run Query:  Ctrl-Enter (or press the play button above)\\n#\\n#   Auto Complete:  Ctrl-Space (or just start typing)\\n#\\n\\nquery {\\n  pokemon {\\n    name\\n    type\\n  }\\n}\",\"variables\":null}",
      "method": "POST",
      "mode": "cors",
      "credentials": "omit"
    })
    .then(response => response.json())
    .then(graphqlResult => {
      dataSet(graphqlResult.data.pokemon);
    });
  },[]);

  */

  return (
    <div className="App">
      <h1>Query</h1>
      <Pokemon />
    </div>
  );
}

export default App;

