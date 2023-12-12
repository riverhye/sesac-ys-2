const mysql = require("mysql");
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'user',
    password: 'name123$',
    database: 'db_study'
});

exports.newUser = function (data, cb) {
    const sql = `INSERT INTO still_user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`

    conn.query(sql, (err) => {
        if (err) {
            throw err;
        }
        cb();
    });
}

exports.signIn = function (data, cb) {
    // userid와 pw가 같은 '튜플' 불러오기

    const sql = `select * from still_user where userid='${data.userid}' and pw='${data.pw}' limit 1`
    conn.query(sql, (err, rows) => {
        if(err) {
            throw err;
        };
        // 배열로 넘겨야 length 메서드 사용 가능
        cb(rows);
    })
}

exports.get_user = function (id, cb) {
    const sql = `select * from still_user where id='${id}' limit 1`
    conn.query(sql, (err, rows) => {
        if(err) {
            throw err;
        };

        cb(rows);
    })
}

exports.editUser = function (data, cb) {
    const sql = `update still_user set userid='${data.userid}', pw='${data.pw}', name='${data.name}' where id='${data.id}' limit 1`
    conn.query(sql, (err) => {
        if(err) {
            throw err;
        };

        cb();
    });
}

exports.deleteUser = function (id, cb) {
    const sql = `delete from still_user where id='${id}'`
    conn.query(sql, (err) => {
        if(err) throw err;

        cb();
    })
}
