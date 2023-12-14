import { CommentRow } from '../types/types';

interface Props {
  // 이 부분이 달라져야 할듯? 배열이 아니라 한 요소로?
  // ----- value 대신 comment로 변경 -----
  comment: CommentRow;
  idx: number;
}

export default function CommentTr({ comment, idx }: Props) {
  return (
    <>
      {/* comments.map((value, idx) =>( )) */}
      {/* comments를 props로 가져와야 할 거 같은데..? */}
      <tr key={idx + 1}>
        <td>{idx + 1}</td>
        <td>{comment.title}</td>
        <td>{comment.writer}</td>
      </tr>
    </>
  );
}
