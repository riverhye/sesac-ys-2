const bcrypt = require('bcrypt');

const salt = 10;

function bcryptPw(pw) {
    return bcrypt.hashSync(pw, salt);
}

console.log('pw 1234', bcryptPw('1234'));

function comparePw(pw, dbPw) {
    return bcrypt.compareSync(pw, dbPw);
}

const dbPw = bcryptPw('1234');
console.log("compare pw: ", comparePw('1234', dbPw))