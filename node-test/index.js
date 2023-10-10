// require 함수 : 모듈이 생성된 파일을 불러오는 함수


// -----case 3-----
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
// 객체 중에 특정 식별자만(add, minus) 가져오는 건 객체 분해 구조 할당 문법을 통해 할 수 있다.
const { add, minus } = require('./math.js');
    //중괄호 안에 가져올 함수명 작성
    // 객체 내부로 타고 들어갈 필요가 없어진다
const sum = add(3,4);
console.log(sum);
console.log(minus(4,3));
// console.log(PI); // 오류 발생


// -----case 2-----
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
// 모듈을 받아올 때 객체 그대로 math라는 식별자로 받음

// const math = require('./math.js') //확장자 생략 가능

// const sum = math.add(5, 9);
// console.log(sum);

// const deduction = math.minus(3,4);
// console.log(deduction);

// console.log(math.PI);


// -----case 1-----
// 파일에서 하나의 식별자만 내보내는 경우

// const add = require('./math.js')
// const sum = add(2, 4);