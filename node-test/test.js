function run() {
    console.log('execute after 3s');
}

console.log('start');

// 콜백 함수 : 함수의 인자로 함수를 넘길 때 인자로 넘기는 그 함수
setTimeout(run, 3000);
console.log('end');