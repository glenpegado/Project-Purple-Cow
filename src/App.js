import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from 'react';
import { useFetch } from './fetchAPI';

const key = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';
const url = `https://api.countapi.xyz/hit/namespace/${key}`;

/*
Create a counter and restrict its operations
Reset the value of a counter
Increment/decrement a counter
*/

function App() {
  const {} = useFetch(url);

  //BODY
  return (
    <div>
      <h1>Project Purple Cow</h1>
    </div>
  );
}

export default App;
