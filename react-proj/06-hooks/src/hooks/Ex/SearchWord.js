import { useState, useMemo } from 'react';

export default function SearchWord() {
  const [text, setText] = useState('');
  const [searchWord, setSearchWord] = useState('');

  const countWord = useMemo(() => {
    if (text.trim() && searchWord.trim()) {
      const words = text.split(' ');
      return words.filter((word) => word.includes(searchWord)).length;
    }
    return 0;
  }, [text, searchWord]);

  return (
    <>
      <h2>
        문장 입력:{' '}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </h2>
      <h2>
        찾을 단어 :{' '}
        <input
          type="text"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </h2>
      <h1>
        {' '}
        {searchWord} 단어의 빈도수 : {countWord}{' '}
      </h1>
    </>
  );
}
