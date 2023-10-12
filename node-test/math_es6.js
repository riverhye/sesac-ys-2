// ES6로 모듈 생성 후 내보내기

 const add = (a, b) => a+b; // 화살표 함수에서는 return 키워드 없이 반환한다는 의미 통용.
 const minus = (a, b) => a-b;
 const PI = 3.14;


// case 1) 하나만 내보낼 경우
// [1] common 문법
// module.exports = add;
// [2] ES6 문법
// export default add;


// case 2) 여러 개 내보낼 경우
// [1] common 문법
// module.exports = {
//    add,
//    minus
// };
// [2] ES6 문법
 export {add, minus};
 export default PI;

// export 'default'?
// 하나의 모듈을 내보낼 땐 반드시 export default 입력 (export 단독은 SytanxError)
// 여러 모듈을 내보낼 때
// (1) 객체 구조분해로 받기 : default 없어도 됨 (단, 내보낼 때 사용한 식별자 이름 그대로 받기)
// (2) 새로운 식별자를 만들어 받기 : export default로 입력!

// common JS
// export할 때 default 개념이 없다.
// 그래서 import 방식만 다를 뿐 export는 하나든 여럿을 내보내든 똑같이 module.exports = sth

// ES6
// 하나 내보내기: export default
// 여럿 받을 때 객체 구조분해 할 거임: export만 써도 ok
// 여럿 받을 때 객체 구조분해 안 할 거임: export default