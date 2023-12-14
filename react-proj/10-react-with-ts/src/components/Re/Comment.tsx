import { ChangeEvent, useState } from 'react';
import CommentTable from '../CommentTable';
import { CommentRow } from '../../types/types';

type searchMode = 'writer' | 'title';

const Comment = () => {
  const [inputWriter, setInputWriter] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [comment, setComment] = useState<CommentRow[]>([
    {
      writer: '민수',
      title: '안뇽',
    },
    {
      writer: '지민',
      title: '하이하이',
    },
    {
      writer: '희수',
      title: '멋쟁이',
    },
  ]);

  const [result, setResult] = useState<CommentRow[]>([]);
  const [searchType, setSearchType] = useState<searchMode>('writer');

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
      // comment.writer === comment['writer']
      // searchType에 아무 string이나 들어올 수 있다!
      // 근데 writer과 title밖에 안 만들어서 정해진 값만 들어옴. 그걸 명시하자.
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

  const selectSearchType = (e: ChangeEvent<HTMLSelectElement>) => {
    // select option 상태 설정
    // setSearchType은 searchMode로 정의해서 writer 아니면 title string이 들어오는데
    // e.target.value는 string이라 아무 string이나 들어올 수 있음(searchType의 에러와 동일한 이유)
    // => as searchMode로 단언해줌.
    setSearchType(e.target.value as searchMode);
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

export default Comment;
