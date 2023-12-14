// Generic 탄생 배경
// 선언할 때 type 지정.
// 다양한 타입을 처리하려면? 오버로딩 사용할 수 있겠지만, 한계가 있음.

function printXY(x: number, y: number): void;
function printXY(x: string, y: string): void;

function printXY(x: number | string, y: number | string) {
  console.log(x, y);
}
printXY(1, 2);

function strPrintXY(x: string, y: string) {
  console.log(x, y);
}
strPrintXY('a', 'b');

// Generic은 호출하거나 사용할 때 type을 넘겨서 지정
// ex. 동일한 타입으로 2개의 매개변수
function printXYByGeneric<T>(x: T, y: T) {
  console.log(x, y);
}

printXYByGeneric<string>('a', 'b');
printXYByGeneric<number>(1, 2);

// ex. 타입 1개(배열) 지정
// 함수 표현식에서는 return{} 대신 =>로 축약 가능~!
const arrLength = <T>(arr: T[]): number => arr.length;
arrLength<string>(['a', 'b']);

// ex. 타입 2개 지정
function exGeneric<T, U>(x: T, y: U) {
  console.log(x, y);
}
exGeneric<string, number>('hello', 1);

// interface에서 generic
// option을 T로 넘겨주어 각각의 interface를 만들어 적용

interface Phone<T> {
  company: string;
  model: string;
  option: T;
}

interface SamsungOption {
  a: string;
  b: number;
}

const samsung23: Phone<SamsungOption> = {
  company: 'samsung',
  model: 'galaxy S23',
  option: {
    a: 'aa',
    b: 23,
  },
};

interface IphoneOption {
  a: string;
  c: number;
}

const iphone15: Phone<IphoneOption> = {
  company: 'apple',
  model: 'iphone 15',
  option: {
    a: 'a is an apple',
    c: 15,
  },
};

// 실습
function arrElement<T>(arr: T[], index: number): boolean {
  console.log(`배열 [${arr}]에 ${index}번 요소가 존재하는지?`);
  if (arr.length < index) return false;
  else return true;
}

console.log(arrElement<string>(['a', 'b', 'c'], 4));
console.log(arrElement<string>(['a', 'b', 'c'], 2));
