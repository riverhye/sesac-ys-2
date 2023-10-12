const fruits=['apple', 'banana', 'pear'];

// 값을 할당하고 싶은 변수 입력
// 배열엔 순서가 있어서 마지막 값을 가져오려면 앞의 두 값도 가져와야 함
// 다 가져올 필요 없음
                // 이미 배열에 존재하는 값은 새로 작성해도 안 바뀐다. fruits의 값을 순서대로 하나씩 할당하기 때문
const [_apple, _banana = 'banana2', _pear, _strawberry = 'strawberry'] = fruits;
console.log(_apple, _banana, _strawberry); // apple banana strawberry

// 아래 작업을 위에서 배열 구조분해 할당으로 처리함!
// const _apple = fruits[0];
// const _banana = fruits[1];
// const _pear = furits[2];

// 두 변수의 값 치환
let x = 1, y = 3;
[x, y] = [y, x];
console.log(x, y); // 3 1

const obj = {
    name: 'une',
    gender: 'WM',
    number: 9
};

// 디렉토리는 배열과 달리 순서가 없으므로 원하는 순서대로 가져오기 가능
// 다 가져올 필요 없음
            // key 이름 변경하기
            // 존재하는 key: 새로운 key
const {number, name: reName, gender, test='test'} = obj;
console.log(number, reName, test); // 9 une test

// 아래 작업을 위에서 객체 구조분해 할당으로 처리함!
// const number = obj.number;
// const gender = obj.gender;


// Spread 연산자
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c', 'd', 'e'];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const hello = [...'hello'];
console.log(hello); // [ 'h', 'e', 'l', 'l', 'o' ]


// 실습: spread로 문자열 합치기
const word1 = 'abc';
const word2 = 'xyz';

const words = [...word1, ...word2];
console.log(words);


// 객체 spread
const obj2 = {
    name: 'une',
    gender: 'WM',
    number: 9
};

const obj3 = {
    ...obj2,
    test: 'test',
};
console.log(obj3);


// rest 파라미터
const value = [10, 20, 30];
                // rest 파라미터: 호출 받는 함수의 파라미터로
function get(a, ...rest) {
    console.log(a), // 10
    console.log(rest); // 할당하고 남은 인자들이 배열로 [20, 30]
}
// spread 파라미터: 함수를 호출할 때의 파라미터
get(...value); // get([10, 20, 30])과 동일