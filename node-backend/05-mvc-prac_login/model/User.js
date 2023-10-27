//  exports.getUser = ()=>{
//     const id = "une"
//     const pw = "1234"
//     return {id, pw}
// }
let users =
`spreatics//12341234//코딩온
codee//4321//코디
une//1234//유네`;

const userSplit = users.split("\n")
// [ 'spreatics//12341234//코딩온', 'codee//4321//코디', 'lily//1234//릴리' ]

// 데이터 가공(배열 순회) 방법 : map, forEach, for of문
// [방법 1] map
// const userInfos = [];
// userSplit.map((user, i)=>{
// 	let parts = user.split("//")
//     userInfos.push({
//     id: parts[0],
//     pw: parts[1],
//     name: parts[2]
//     })
//   })

// [방법 2] forEach
const userInfos = [];
userSplit.forEach((user)=>{
	let parts = user.split("//")
    userInfos.push({
    id: parts[0],
    pw: parts[1],
    name: parts[2]
    })
  })

// [방법 3] for of문
// const userInfos = [];
// for (const user of userSplit) {
//     let parts = user.split("//")
//     userInfos.push({
//         id: parts[0],
//         pw: parts[1],
//         name: parts[2]
//     })
// }

module.exports = userInfos;

// exports.module = user;

// 어떤 식으로 저장해야 할까? 빈 객체를 만들어서 push
// id, pw, name 형식으로 바꾸기
// id와 pw를 Cmain으로 전달
// Cmain에서 실행한 걸 변수에 담고 그 변수의 key에 접근해 값 비교