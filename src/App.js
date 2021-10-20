import React, { useState, useEffect } from 'react';
// import { useFetch } from './fetchAPI';

const key = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';
const url = `https://api.countapi.xyz/hit/namespace/${key}`;

function App() {
  const [counting, setCounting] = useState(0);

  const CountAPI = async () => {
    const res = await fetch(url);
    const count = await res.json();
    console.log(count);
    setCounting(count);
  };

  useEffect(() => {
    CountAPI();
  }, [url]);

  // const counter = useFetch(url);
  // console.log(counter);

  //BODY
  return (
    <div>
      <h1>Project Purple Cow</h1>
      <button onClick={(el) => setCounting(el + 1)}>Click</button>
    </div>
  );
}

export default App;
