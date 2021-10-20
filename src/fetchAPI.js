import { useState, useEffect } from 'react';

export function useFetch(url) {
  //STATE
  const [loading, setLoading] = useState(true); //boolean
  const [products, setProducts] = useState([]); //empty array

  //Fetch
  const getProducts = async () => {
    const res = await fetch(url);
    const products = await res.json();

    setProducts(products); // add json response to array
    setLoading(false); // change to false
  };

  //UseEffect
  useEffect(() => {
    getProducts();
  }, [url]);

  return { loading, products };
}
