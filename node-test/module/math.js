// 수학 관련 모듈 생성하기

// const add = (a, b) => a+b;
// // 아래와 동일한 코드
// // => {
// //    return a + b;
// // }
// const minus = (a, b) => a-b;
// const PI = 3.14;


// -----case 2, 3-----
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
// module.exports = {
//     add,
//     minus,
//     PI
// };
// 함수를 넘기는 것이기 때문에 모듈 생성할 땐 함수를 호출하지 않는다.

// cf. 선언할 때부터 내보내는 방법도 있다
module.exports.add = (a,b) => a + b;
module.exports.minus = (a,b) => a - b;
module.exports.PI = 3.14;


// -----case 1-----
// 파일에서 하나의 식별자만 내보내는 경우
// const data = {
//     add: add,
//     minus: minus,
//     PI: PI
// };
// 식별자 이름과 함수를 동일한 이름으로 넘기고 싶을 땐 key: value가 아닌 이름 하나만 써도 된다.


// 함수 생성 -> 모듈 생성