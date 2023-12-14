import CommentTr from '../CommentTr';
import { CommentRow } from '../../types/types';

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
          {comments.map((comment, idx) => {
            return <CommentTr comment={comment} idx={idx} />;
          })}
        </tbody>
      </table>
    </>
  );
}
