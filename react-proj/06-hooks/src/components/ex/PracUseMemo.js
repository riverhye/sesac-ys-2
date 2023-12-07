import { useState, useMemo } from 'react';

export default function PracUseMemo() {
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleSearchInput = (e) => setText(e.target.value);
  const handleSearch = (e) => setSearchText(e.target.value);

  const searchNumber = useMemo(() => {
    if (text.trim() && searchText.trim()) {
      const words = text.split(' ');
      return words.filter((word) => word.includes(searchText)).length;
    } else {
      return 0;
    }
  }, [text, searchText]);

  return (
    <>
      <input type="text" value={text} onChange={handleSearchInput} />
      <br />
      <input type="text" value={searchText} onChange={handleSearch} />
      <h2>
        {searchText} 단어의 빈도수: {searchNumber}
      </h2>
    </>
  );
}
