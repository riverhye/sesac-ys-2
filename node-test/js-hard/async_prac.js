function call(name) {
    return new Promise((resolve)=>{
        setTimeout(()=> {
            console.log(name);
            resolve(name);
        }, 1000)
    })
}

function back() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('back');
            resolve('back');
        }, 1000)
    })
}

function hell() {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve('callback hell');
        }, 1000);
    })
}


// [1] then으로
            // !! then에서 resolve(name) 함수를 받아 매개변수 result로 받아옴 !!
call('kim').then((result)=>{
    console.log(result + ' 반가워');
    return back();
}).then((result)=>{
    console.log(result + ' 실행');
    return hell();
}).then((result)=>{
    console.log(result);
});


// 메서드 체이닝이 안 된 then..
// call('kim').then((result)=>{
//     console.log(result + ' 반가워');
// })

// back().then((txt)=>{
//     console.log(txt +'을 실행했구나');
// })

// hell().then((message)=>{
//     console.log('여기는 ' + message + '이 아니야')
// })


// [2] async, await로
async function exec() {
    const res1 = await call('kim');
    console.log(`${res1} 반가워`);
    const res2 = await back();
    console.log(`${res2}을 실행했구나`);
    const res3 = await hell();
    console.log(`${res3}이 아니야`);
}

exec();