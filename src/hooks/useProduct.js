import { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((product) => setProducts(product));
  }, []);

  return [products, setProducts];
};
export default useProduct;
