// ES6 문법으로 모듈 가져오기
// 가져올 때 파일 확장자까지!

// case 1. 하나의 모듈 받아오기
// math_es6 파일에서 default로 export하는 식별자를 add2라는 식별자로 받기
// import add2 from "./math_es6.js";

// case 2. 여러 개 모듈 받아오기
// 객체 구조분해는 가져올 곳의 key값과 동일한 식별자로 받기
// import {add} from "./math_es6.js";
// console.log(add2(2, 3));

// 객체 구조분해 없이 식별자를 만들어서 가져오려면 export하는 모듈 파일이 중요
// 즉 내보낼 때 export default로 내보내기!
 import math from "./math_es6.js";
 console.log(math);







// package.json에 "type": "module" 입력하여 ES6문법 사용을 명기했기 때문에 common 문법으로 작성한 건 오류 발생!