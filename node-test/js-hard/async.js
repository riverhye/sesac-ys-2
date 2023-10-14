// [마트] 문제(비동기 처리 때문에 product와 price에 undefined가 할당됨) 발생.
// 콜백 함수나 promise로 해결


// -------- [마트] 1. 콜백 함수로 해결하기 --------
// function goMart() {
//     console.log('마트에 가서 어떤 음료를 살지 고민한다.');
// }

// let product;
// let price;

// function pickDrink(callback) {
//     setTimeout(function () {
//         console.log('고민 끝');
//         product = '제로 콜라'
//         price = 2000;
//         callback(product, price);
//     }, 3000);
// }

// function pay(product, price) {
//     console.log(`상품명: ${product}, 가격: ${price}`);
// }

// goMart();
// pickDrink(pay);


// -------- [마트] 2. Promise로 해결하기 -------- 
// function goMart() {
//     console.log('마트에 가서 어떤 음료를 살지 고민한다.');
// }

// let product;
// let price;

// function pickDrink(callback) {
//     // 비동기 처리의 문제가 발생하는 곳에 Promise 객체 생성
//     return new Promise(function(resolve, reject){
//         setTimeout(function () {
//             console.log('고민 끝');
//             product = '제로 콜라'
//             price = 2000;
//             // 원하는 작업(할당)이 다 된 후 resolve method
//             resolve();
//         }, 3000);
//     });
// }

// // 제일 마지막에 실행할 함수
// function pay(product, price) {
//     console.log(`상품명: ${product}, 가격: ${price}`);
// }

// goMart();
// // resolve를 만난 후 실행할 then
// pickDrink().then(()=>{
//     // 값이 다 할당된 후 가장 나중에 실행할 pay를 호출.
//     pay(product, price);
// });


// callback VS Promise
// 콜백함수는 함수 실행문을 봐도 하나씩 해석해야 하는데
// 프로미스는 실행문의 식별자명으로도 흐름이 보인다.


// -------- [사칙연산] Promise -------- 
// function add(n1, n2){
//     return new Promise(function (resolve){ // reject 쓸 일 없으면 일케 지워도 됨.
//         setTimeout(function(){
//             let result = n1 + n2;
//             resolve(result);
//         }, 1000);
//     });
// }

// function mul(n) {
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             let result = n * 2;
//             resolve(result);
//             // reject('ERROR')
//         }, 700);
//     });
// }

// function sub(n) {
//     return new Promise(function(resolve){
//         setTimeout(() => {
//             let result = n - 1;
//             // then에서 사용하려면 result값을 resolve에 넘긴다.
//             resolve(result);
//         }, 500);
//     });
// }

// add(4, 3).then((result)=>{
//     console.log('1: ', result);
//     // then에서 return하는 객체가 promise일 경우, 다음 then에서 사용 가능
//     // 그래서 콜백 함수로 쓰지 않아도 된다.
//     // 원래라면 mul(result).then(()=>{})로 다시 콜백 됨
//     return mul(result) // Promise 객체인 mul 함수에 result를 매개변수로 넘겨줌.
// }).then((result)=>{
//     console.log('2: ', result);
//     return sub(result);
// }).then((result)=>{
//     console.log('3: ', result);
// })
// .catch((err)=>{
//     console.log(err);
// })


// -------- [사칙연산] Promise에 async/await 사용 -------- 

// async : 비동기 처리하는 함수 앞에 붙인다. Promise return하므로 프로미스 객체만 이용 가능.
// await : async 함수 내부에서만 사용할 수 있는 키워드.
// 그래서 await을 쓰지 않으면 async를 쓰든 안 쓰든 상관 없다. (ex. 앞 예시)

// async function exec() {
//     // add 함수가 실행되어서 반환하는 값을 '기다렸다가' x에 담음
//     // 즉 다음 코드를 실행하지 않고, promise 객체 값을 리턴한 후에 다음 줄 gogo
//     const x = await add(4, 3); // x = 7
//     console.log('1: ', x);
//     const y = await mul(x); // y = 14
//     console.log('2: ', y);
//     const z = await sub(y); // z = 13
//     console.log('3: ', z);
// }

// exec();


// [마트] async/await

function goMart() {
    console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

let product;
let price;

function pickDrink() {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('고민 끝');
            product = '제로 콜라'
            price = 2000;
            resolve();
        }, 3000);
    });
}

function pay(product, price) {
    console.log(`상품명: ${product}, 가격: ${price}`);
}

// async/await 쓸 땐 새 함수를 만들어서
async function pickIt () {
    goMart();
    await pickDrink(); // resolve 만날 때까지 기다림
    pay(product, price); // 만나고 이 줄 실행
}

pickIt();
