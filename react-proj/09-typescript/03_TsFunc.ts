// 함수 자체의 type(return 값)을 지정할 수도 있음.
// 지정하면 반드시 return 이 있어야 하고, type이 알맞아야 함!
function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(1, 2));

// 옵셔널 체이닝을 쓰고 싶다면 조건문 걸어서
const sum1 = (a: number, b?: number): number => {
  if (b) return a + b;
  return a;
};

interface Calculator {
  sum: (a: number, b: number) => number;
  // void : 함수 자체의 return 값 없을 때
  sub?: () => void;
}

const calc: Calculator = {
  sum: sum,
};

// never : 끝을 도달할 수 없는 함수에 다다르고 싶을 때 or 에러 객체 return
// 하지만 거의 쓸 일이 없다.

// 함수 오버로딩 : 함수명 동일 형태가 다름 (매개변수, type 등)
// function 키워드로 시작하는 함수 선언문으로 해야 함
// 선언 - 구현 - 실행 순으로 작성, 구현은 한꺼번에!
// 자주 안 쓰임
function hello(numb: number): void;
function hello(str: string, str2: string): string;

function hello(param: number | string, param2?: number | string): any {
  console.log(param, param2);
  return param;
}

hello(2);
hello('hello', 'world');

// 두 개의 수를 매개 변수로 받고 합을 console.log 로 출력하는 함수 만들기
function sum2(a: number, b: number): number {
  console.log('a+b', a + b);
  return a + b;
}

sum2(5, 11); // 테스트

// 매개 변수로 여러 개의 수를 받고 전달된 값을 모두 더하는 함수 만들기
// 모두 합산한 값을 "return" 합니다.
// Hint: 전개 연산자 이용하기

function sum3(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

// 테스트
console.log(sum3(1, 2, 3, 5, 10));
