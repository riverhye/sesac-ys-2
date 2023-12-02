import { useState } from 'react';

function PracMap2() {
  const [list, setList] = useState([{ id: null, name: '', title: '' }]);
  const [name, setName] = useState([]);
  const [title, setTitle] = useState([]);
  const [searchMsg, setSearchMsg] = useState('검색 결과가 없습니다.');
  const [mode, setMode] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [searchList, setSearchList] = useState([
    { id: null, name: '', title: '' },
  ]);

  const addTable = () => {
    const newTr = { id: list.length, name: name, title: title };
    const newList = list.concat(newTr);
    setList(newList);
  };

  const searchResult = (input) => {
    setSearchMsg('검색 결과');

    if (mode === 'name') {
      const searchTr = list.filter((value) =>
        value.name.toLowerCase().includes(input)
      );
      setSearchList(searchTr);
    } else if (mode === 'title') {
      const searchTr = list.filter((value) =>
        value.title.toLowerCase().includes(input)
      );
      setSearchList(searchTr);
    }
  };

  return (
    <>
      <fieldset>
        작성자 : <input type="text" onChange={(e) => setName(e.target.value)} />
        제목 : <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <button onClick={addTable}>작성</button>
      </fieldset>
      <select onChange={(e) => setMode(e.target.value)}>
        <option value="name">작성자</option>
        <option value="title">제목</option>
      </select>
      <input type="text" onChange={(e) => setSearchInput(e.target.value)} />
      <button
        style={{ margin: '20px' }}
        onClick={() => searchResult(searchInput)}
      >
        검색
      </button>
      <table
        border="1"
        style={{
          width: '80%',
        }}
      >
        <thead
          style={{
            textAlign: 'center',
          }}
        >
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
          </tr>
        </thead>
        <tbody>
          {list.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div style={{ margin: '30px' }}>{searchMsg}</div>
      {searchMsg}
      <table border="1" style={{ width: '80%' }}>
        <thead
          style={{
            textAlign: 'center',
          }}
        >
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
          </tr>
        </thead>
        <tbody>
          {searchList.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default PracMap2;
