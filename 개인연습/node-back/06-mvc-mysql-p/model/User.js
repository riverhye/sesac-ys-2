const mysql = require("mysql");
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'user',
    password: 'name123$',
    database: 'db_study'
});

exports.newUser = function (data, cb) {
    const sql = `INSERT INTO still_user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`;

    conn.query(sql, (err) => {
        if (err) {
            throw err;
        }
        cb();
    });
}

// exports.newUser = (data, cb) => {
//     const sql = `insert into still_user (userid, name, pw) values('${data.userid}', '${data.name}', '${data.pw}')`
//     console.log('SQL Query:', sql);

//     conn.query(sql, (err, addData) => {
//         if(err) {
//             return cb(err);
//         }

//         cb(null, addData.insertedId);
//     })
// }

// register에선 id 조회할 필요가 없으니까 콜백함수 매개인자 필요 없?
// 혹은 아이디를 기준으로 해당 튜플을 찾아서 보여주는 건가..?
