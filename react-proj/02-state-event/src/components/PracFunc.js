import { useState } from 'react';

function PracFunc() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <div>number : {number}</div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          setNumber(number - 2);
        }}
      >
        decrease
      </button>
    </>
  );
}

export default PracFunc;
