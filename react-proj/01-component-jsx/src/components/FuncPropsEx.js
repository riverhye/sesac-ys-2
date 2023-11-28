// 1. props를 매개변수로
// function FuncPropsEx(props) {
//   //   props = {
//   //     title: 'SeSAC',
//   //     content: 'hello world',
//   //   };

//   return (
//     <>
//       <div>함수형 컴포넌트에서의 props</div>
//       <div>
//         제목은 {props.title}, 내용은 {props.content}
//       </div>
//     </>
//   );
// }

// 2. 컴포넌트 내에서 props 매개변수 구조분해
// function FuncPropsEx(props) {
//   const { title, content } = props;

//   return (
//     <>
//       <div>함수형 컴포넌트에서의 props</div>
//       <div>
//         제목은 {title}, 내용은 {content}
//       </div>
//     </>
//   );
// }

// 3. props를 매개변수로 가져올 때 구조분해
// function FuncPropsEx({ title, content }) {
//   return (
//     <>
//       <div>함수형 컴포넌트에서의 props</div>
//       <div>
//         제목은 {title}, 내용은 {content}
//       </div>
//     </>
//   );
// }

// 4. prototype을 이용해 어떤 props가 넘어올지 명시
// WHY? JS는 유연해서 뜻밖의 props가 넘어와도 오류 발생 X -> 오류 찾기 어려움
import PropTypes from 'prop-types';

function FuncPropsEx({ title, content, number }) {
  return (
    <>
      <div>함수형 컴포넌트에서의 props</div>
      <div>
        제목은 {title}, 내용은 {content}, 숫자는 {number}
      </div>
    </>
  );
}

FuncPropsEx.defaultProps = {
  title: 'defatult title',
};

FuncPropsEx.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  number: PropTypes.number,
};

export default FuncPropsEx;
