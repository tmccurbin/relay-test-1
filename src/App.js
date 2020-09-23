import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  // for useEffect we use an empty array as an argument to run on mount
  useEffect(() => {
    
  },[]);

  return (
    <div className="App">
      <h1>Query</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;

