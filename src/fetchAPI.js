import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [counting, setCounting] = useState([]);
  const [page, setPage] = useState([]);

  const CountAPI = async () => {
    const res = await fetch(url);
    const count = await res.json();
    console.log(count);
    setCounting(count);
  };

  useEffect(() => {
    CountAPI();
  }, [url]);

  return { setPage, page, counting };
}
