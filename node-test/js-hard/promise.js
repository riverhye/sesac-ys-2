// Promise 예시
function promise1 (flag) {
    return new Promise(function(resolve, reject){
        if(flag) {
            // 성공했을 때의 결과값을 resolve에 입력
            resolve(`상태 fulfilled -> then으로 연결`);
        } else {
            reject(`상태 rejected -> catch로 연결`);
        }
    });
}

// 특정 함수의 return 값이 promise 객체일 때 메서드 체이닝으로 then과 catch 메서드 사용 가능
promise1(true).then((result)=>{
    // result에는 resolve의 인자 값이 들어온다.
    console.log(result); // 상태 fulfilled -> then으로 연결
}).catch((error)=>{
    console.log(error); // true값을 보내서 resolve 부분만 실행
});
// then 없이 catch만 올 수도 있음.
// 흠 약간 if문 같네

promise1(false).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error); // 상태 rejected -> catch로 연결
});