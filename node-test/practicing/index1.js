// 가져오기 1 : 객체 전체
// 선언한 객체를 타고 들어가 함수 실행
// 식별자에 require -> 해당 식별자 타고 특정 함수 호출
const math = require('./math1');

const numSum = math.add(4,5);
console.log(numSum);
const numDeduction = math.minus(5,8);
console.log(numDeduction);


// // 가져오기 2 : 객체 일부
// // 가져올 함수만 중괄호 안에 기입해 require -> 가져온 함수 중 원하는 거 호출
// const {add2, minus2, divide2, multiply2} = require('./math1');

// // 하나하나 데려왔으니까 바로 실행
// const sum = add2(4,5);
// const deduction = minus2(5,2);
// console.log(sum);
// console.log(deduction);
