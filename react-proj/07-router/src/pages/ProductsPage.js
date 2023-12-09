import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
              // 이 부분도 컴포넌트로 만드는 게 좋다.
              <ul key={value.id}>
                <li>상품 번호 : {value.id}</li>
                <li>상품명 : {value.title}</li>
                <li>
                  상품 내용 : <div>{value.body}</div>
                </li>
                <li>
                  <Link to={`/product/${value.id}`}>상세페이지로 이동하기</Link>
                </li>
              </ul>
              // 여기까지
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
