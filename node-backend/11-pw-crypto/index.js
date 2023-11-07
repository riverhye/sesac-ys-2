const crypto = require('crypto');

function createHashedPw(pw) {
    return crypto.createHash('sha512').update(pw).digest('base64');
}

console.log("pw 1234:", createHashedPw('1234'));

// 같으면 로그인 성공, 틀리면 로그인 실패
const input = '1234';
const dbPw = '1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w=='

console.log("compare result", createHashedPw(input) == dbPw)

// 하지만 같은 비밀번호면 암호화 키가 모두 똑같다는 문제
// 보안 이슈 생길 수 있어서 '소금 치는' 작업 필요(비밀번호마다 랜덤 값 추가)
// 입력값에 +salt 넣거나 아래 함수 이용

function createHashedPwWithSalt(pw) {
    // table에 salt, return 값도 같이 저장
    // why? salt는 아래처럼 랜덤하게 생성하므로 회원가입 시의 salt를 그대로 로그인 할 때 조회해야 함
    const salt = crypto.randomBytes(16).toString('base64');
    console.log('salt', salt);
    const iterations = 100;
    const keylen = 64;
    const digest = 'sha512';
    // 매개변수 : (암호화할 문자열, salt, 반복횟수, 키 길이<-결과값 몇 글자?, 알고리즘)
    return crypto.pbkdf2Sync(pw, salt, iterations, keylen, digest).toString('base64');
}

function comparePw(pw, salt) {
    const iterations = 100;
    const keylen = 64;
    const digest = 'sha512';
    return crypto.pbkdf2Sync(pw, salt, iterations, keylen, digest).toString('base64');
}

const dbPwSalt = 'lKKqXOsSAPOm7Nbl3YUYkJigSq8Xirm8XTBKFaQBzQwV2gq12u3Pg3UHuq6zY7LfJJp1eE/5L/i3RP6DBI36Sw=='
const dbSalt = 'y7NRrS/9QRaIUtppPl78SQ=='
console.log("compare result with salt", comparePw(input, dbSalt) == dbPwSalt)

console.log('pw salt: ', createHashedPwWithSalt('1234'));