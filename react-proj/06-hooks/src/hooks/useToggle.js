// 가정 : true <-> false 처리할 일이 자주 생김
import { useState } from 'react';

export default function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
}
