// props도 타입 지정해야 함
// 보통 interface 객체를 만들어 줌
import CommentTr from './CommentTr';
import { CommentRow } from '../types/types';

interface Props {
  comments: CommentRow[];
}

export default function CommentTable({ comments }: Props) {
  return (
    <>
      <table border={1} style={{ marginTop: '30px', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((value, idx) => {
            return <CommentTr key={idx} comment={value} idx={idx} />;
          })}
        </tbody>
      </table>
    </>
  );
}
