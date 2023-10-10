// 작성 1 : 정의와 내보내기 동시에
module.exports.add = (a,b) => a+b;
module.exports.minus = (a,b) => a-b;
module.exports.divide = (a,b) => a/b;
module.exports.multiply = (a,b) => a*b;


// 작성 2 : 변수 설정 후 내보내기 따로
// const add2 = (a, b) => a+b;
// const minus2 = (a, b) => a-b;
// const divide2 = (a, b) => a/b;
// const multiply2 = (a, b) => a*b;

// module.exports = {
//     add2,
//     minus2,
//     divide2,
//     multiply2
// }