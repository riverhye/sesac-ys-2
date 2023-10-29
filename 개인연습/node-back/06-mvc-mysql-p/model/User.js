const mysql = require("mysql");
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'name1234$',
    database: 'db_study'
});

exports.newUser = function (data, cb) {
    conn.query(`insert into still_user values('${data.userid}', '${data.name}', '${data.pw}')`,
    (err) => {
        if(err) {
            throw err;
        }
        cb();
    })
}

// register에선 id 조회할 필요가 없으니까 콜백함수 매개인자 필요 없?
// 혹은 아이디를 기준으로 해당 튜플을 찾아서 보여주는 건가..?
