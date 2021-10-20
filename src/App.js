import React, { useState, useEffect } from 'react';
import { useFetch } from './fetchAPI';

const key = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';
const URL = `https://api.countapi.xyz/hit/namespace/${key}`;

function App() {
  //UseFetch
  const { setPage, page, counting } = useFetch(URL);
  //BODY
  return (
    <div>
      <h1>Project Purple Cow</h1>
      <button onClick={() => setPage(counting)}>Button</button>
      <h1>{page.value}</h1>
    </div>
  );
}

export default App;
