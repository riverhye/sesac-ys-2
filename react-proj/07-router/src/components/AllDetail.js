import { Link } from 'react-router-dom';

export default function AllDetail({ mode, value }) {
  return (
    <>
      {mode === 'photo' && (
        <ul key={value.id}>
          <li>이미지 번호 : {value.id}</li>
          <li>이미지 제목 : {value.title}</li>
          <li>
            이미지 :{' '}
            <div>
              <img src={`${value.url}`} alt="상품 이미지" />
            </div>
          </li>
          <a
            href={`/photo/${value.id}`}
          >{`${value.id}번 상세페이지 이동하기`}</a>
        </ul>
      )}

      {mode === 'product' && (
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
      )}
    </>
  );
}
