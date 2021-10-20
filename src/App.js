import './App.css';
import React, { useState, useEffect } from 'react';
import { useFetch } from './fetchAPI';

const key = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';
const URL = `https://api.countapi.xyz/hit/namespace/${key}`;

function App() {
  //UseFetch
  const { setClicked, setPage, page, counting, clicked } = useFetch(URL);

  const PageClicks = () => {
    setClicked(true);
    setTimeout(() => {
      setPage(counting);
    }, 800);
  };

  //BODY
  return (
    <div className='page'>
      <h1>Project Purple Cow</h1>
      <button className='button' onClick={PageClicks}>
        Button
      </button>

      {clicked ? <h2>The number of hits are: {page.value}</h2> : clicked}
    </div>
  );
}

export default App;
