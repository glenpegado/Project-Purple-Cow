import { useState, useEffect } from 'react';

export function useFetch(url) {
  //STATE
  const [counting, setCounting] = useState(0);

  //Fetch
  const CountAPI = async () => {
    const res = await fetch(url);
    const count = await res.json();

    setCounting(count);
  };

  //UseEffect
  useEffect(() => {
    CountAPI();
  }, [url]);

  return counting;
}
