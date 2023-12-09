import { useState, useEffect } from 'react';
import AllDetail from '../components/AllDetail';

export default function ProductsPage() {
  const [product, setProduct] = useState(null);
  const getProducts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const products = await res.json();
    setProduct(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div>
        {product ? (
          <>
            {product.map((value) => (
              <AllDetail mode="product" value={value} />
            ))}
          </>
        ) : (
          <>
            <div>Loading...</div>
          </>
        )}
      </div>
    </>
  );
}
