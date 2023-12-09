export default function Detail({ mode, photo, product }) {
  return (
    <>
      {mode === 'photo' && (
        <>
          <li>이미지 번호 : {photo.id}</li>
          <li>이미지 제목 : {photo.title}</li>
          <li>
            <div>
              이미지 : <img src={`${photo.url}`} alt="이미지" />
            </div>
          </li>
        </>
      )}

      {mode === 'product' && (
        <ul>
          <li>상품 번호 : {product.id}</li>
          <li>상품명 : {product.title}</li>
          <li>상품 내용 : {product.body}</li>
        </ul>
      )}
    </>
  );
}
