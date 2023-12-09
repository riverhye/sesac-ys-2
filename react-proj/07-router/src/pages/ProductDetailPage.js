import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Detail from '../components/Detail';

export default function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const [msg, setMsg] = useState('Loading...');
  // 1. useParams :
  const { id } = useParams();
  // ex. product/:id/:name
  // useParams에 객체로 담김 => { id: value, name: value }
  // console.log(id);

  const getProduct = async () => {
    try {
      // try 안에 오류가 생길 수 있는 코드
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      // ---------- fetch는 res.ok로 데이터가 잘 왔는지 확인 필요하고,
      if (res.ok) {
        const prod = await res.json();
        setProduct(prod);
      } else {
        // ---------- throw Error를 하면
        throw Error('존재하지 않는 상품입니다.');
      }
    } catch (error) {
      // 던진 에러를 catch가 받아 error 객체의 message에 담김
      setMsg(error.message);
    }
  };

  // 2. useSearchParams :
  // 쿼리를 가져오고 싶을 때 ex. ~~~?id=2&name=une
  const [query, setQuery] = useSearchParams();

  // useSearchParams에 size(쿼리 개수)가 담김
  // console.log(query); // URLSearchParams {size: 1}

  // 쿼리에서 특정 키의 값을 가져오고 싶을 때
  // console.log(query.get('name'));

  // 3. useNavigator :
  // Link 컴포넌트를 이용하지 않고 js 함수 내부에서 페이지 이동하는 코드 작성할 때
  const navigator = useNavigate();
  // ex. 뒤로 1번 가기 : navigator(-1)
  // ex. 라우터 직접 입력 : navigator("/")

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div>
        <button
          onClick={() => {
            navigator(-1);
          }}
        >
          목록으로 이동
        </button>
        <button
          onClick={() => {
            navigator('/');
          }}
        >
          홈 이동
        </button>
        {/* setQuery는 인자로 보낸 정보로 새 쿼리를 만들고 해당 url로 변경(이동) */}
        {/* <button onClick={() => setQuery({ name: 'codee', id: 55 })}>
          setQuery 테스트
        </button> */}
        {product ? (
          <Detail mode="product" product={product} />
        ) : (
          <div>{msg}</div>
        )}
      </div>
    </>
  );
}
