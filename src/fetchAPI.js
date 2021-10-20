import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [counting, setCounting] = useState([]);
  const [page, setPage] = useState([]);
  const [clicked, setClicked] = useState(false);

  const CountAPI = async () => {
    const res = await fetch(url);
    const count = await res.json();

    setCounting(count);
  };

  useEffect(() => {
    CountAPI();
  }, [url]);

  return { setClicked, setPage, page, counting, clicked };
}
