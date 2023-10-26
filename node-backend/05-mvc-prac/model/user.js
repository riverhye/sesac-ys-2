 exports.getUser = ()=>{
    const id = "une"
    const pw = "1234"
    return {id, pw}
}

// let users =
// `spreatics//12341234//코딩온
// codee//4321//코디
// lily//1234//릴리`;

// const user = users.split("\n")
// [ 'spreatics//12341234//코딩온', 'codee//4321//코디', 'lily//1234//릴리' ]

// exports.module = user;

// 어떤 식으로 저장해야 할까? 빈 객체를 만들어서 push
// id, pw, name 형식으로 바꾸기
// id와 pw를 Cmain으로 전달
// Cmain에서 실행한 걸 변수에 담고 그 변수의 key에 접근해 값 비교