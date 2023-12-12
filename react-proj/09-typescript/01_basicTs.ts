let str: string = 'hello';
// str = 5; // err
console.log(str);

let num: number;
num = 5;

let undif: undefined = undefined;
let nu: null = null;

let arr: number[] = [1, 2, 3, 4, 5];

let strArr: string[] = ['a', 'b', 'c'];
let strArr2: Array<string> = ['a', 'b'];

let numStrArr: (number | string)[] = [1, 'a'];
let numStrArr2: Array<number | string> = [1, 'a'];

let abc: number | string = 'a';
abc = 3;

// any 사용 지양
let anyArr: any[] = [1, 'a', null, {}];

let obj: object = {
  name: 'kat',
};

// Tuple : 배열 개수&타입 제한 BUT push 메서드는 에러 감지 못하고 추가됨. 접근은 안 됨.
let drink: [string, number] = ['coke', 3000];
console.log(drink[0]); // coke
drink[0] = 'cider';
// drink[2] = 'aaa'; // err
// JS 메서드는 대부분 사용 가능
drink.push('aaa');
console.log(drink);

let drink2: readonly [string, number] = ['coke', 2500];
// drink2[0] = 'cider' // err
// drink2.push('aaa') // err

// Enum
enum Weather {
  sun = 'sun',
  rain = 'rain',
  cloud = 'cloud',
}

console.log(Weather.sun);
