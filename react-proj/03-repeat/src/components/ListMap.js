import { useState } from 'react';

// map은 배열을 반복하며, map의 인자로 넘어가는 콜백함수의 return값으로 새 배열 만듦

function ListMap() {
  const productList = [
    { id: 1, product: '가방' },
    { id: 2, product: '패딩' },
    { id: 3, product: '신발' },
    { id: 4, product: '상의' },
    { id: 5, product: '하의' },
  ];
  const [list, setList] = useState(productList);
  const [newProduct, setNewProduct] = useState('');

  // 할 일 : input value(newProduct)를 map의 list(productList)에 추가하기
  const addProduct = () => {
    // 새 상품을 BE에 요청 보내 insert하고, BE에서 PK를 넘겨줘서 그걸 id에 넘기는 게 좋다.
    const newObj = { id: list[list.length - 1].id + 1, product: newProduct };
    // const newList = [...list, newObj];
    const newList = list.concat(newObj);
    setList(newList);
    setNewProduct(''); // input 비워주기
  };

  // 할 일 : 더블클릭 하면 list 배열에서 원하는 원소 삭제 -> 삭제된 버전의 배열을 다시 list에 할당
  const deleteProduct = (id) => {
    // filter 메서드 : 배열 반복. 조건을 return하는데, true라면 해당 원소 새 배열 포함 false는 포함 X
    const newList = list.filter((value) => value.id !== id);
    setList(newList);
  };

  return (
    <>
      {/* 배열의 요소를 그대로 나열 -> abc */}
      {/* {list} */}
      <label>추가 상품 : </label>
      <input
        text="text"
        onChange={(e) => setNewProduct(e.target.value)}
        value={newProduct}
      />
      <button onClick={addProduct}>추가</button>
      <ul>
        {list.map((value) => (
          <li
            style={{ cursor: 'pointer' }}
            key={value.id}
            onDoubleClick={() => deleteProduct(value.id)}
          >
            {value.product}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListMap;
