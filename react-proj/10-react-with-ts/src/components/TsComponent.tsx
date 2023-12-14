import { ChangeEvent, useState } from 'react';
import CommentTable from './CommentTable';

//  ------ 공통 부분은 types/type.ts에 설정 ------
import { CommentRow } from '../types/types';

// ------ string 중에서도 특정 값만 ------
type conditionSearch = 'writer' | 'title';

const TsComponent = () => {
  // ------ useState : 초기값 설정 시 타입을 자동 해석 ------
  const [inputWriter, setInputWriter] = useState<string>('');
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputSearch, setInputSearch] = useState<string>('');
  const [comment, setComment] = useState<CommentRow[]>([]);
  const [result, setResult] = useState<CommentRow[]>([]);
  const [searchType, setSearchType] = useState<conditionSearch>('writer');

  const addComment = () => {
    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };

    setComment([...comment, newComment]);
    setInputWriter('');
    setInputTitle('');
  };

  const searchComment = () => {
    let searchResult = comment.filter((item) => {
      // 검색결과 없음; null 반환
      if (!item[searchType].includes(inputSearch)) {
        return null;
      }

      // 검색결과 있음; 검색결과(배열) 반환
      return item;
    });

    // 검색 결과 state 설정
    setResult(searchResult);
    setInputSearch('');
  };

  // ------ onchange 이벤트 객체의 타입 검색 -> HTMLSelectElement ------
  const selectSearchType = (e: ChangeEvent<HTMLSelectElement>) => {
    // ------ writer 아니면 title인 게 확실하니까 as 키워드로! ------
    setSearchType(e.target.value as conditionSearch);
  };

  return (
    <div>
      <form>
        <label htmlFor="wirter2">작성자:</label>
        <input
          id="wirter2"
          type="text"
          name="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title2">제목:</label>
        <input
          id="title2"
          type="text"
          name="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <form>
        <select name="type" onChange={selectSearchType}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>

        <input
          type="text"
          name="search"
          placeholder="검색어"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>

      {/* ------ 동일한 부분 컴포넌트화 ------ */}
      <h3>전체 댓글 목록</h3>
      <CommentTable comments={comment} />

      <h3>댓글 검색 결과</h3>
      {result.length > 0 ? (
        <div>
          <CommentTable comments={result} />
        </div>
      ) : (
        <h5>검색 결과가 없습니다.</h5>
      )}
    </div>
  );
};

export default TsComponent;
