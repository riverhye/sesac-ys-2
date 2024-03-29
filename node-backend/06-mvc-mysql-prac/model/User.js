// mysql 연동하기
const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost", // :1:3306 에러 시 127.0.0.1로
    user: "user", // root 아닌 사용자
    password: "name123$", // 오류날 시 비번 재설정
    database: "sesac_test"
})

// 회원가입
exports.registerUser = (data, cb) => {
    const sql = `insert into new_user (userid, pw, name) values('${data.userid}', '${data.pw}', '${data.name}')`;
    conn.query(sql, (err) => {
        if(err) {
            throw err;
        }
        cb();
    })
}

// 로그인
exports.users = (data, cb) => {
    const sql = `select * from new_user where userid='${data.userid}' and name='${data.name}' and pw='${data.pw}'`;
    conn.query(sql, (err, result)=>{
        if(err) {
            throw err;
        };
        console.log("user", result);
        // sql문 결과가 result가 담김!
        cb(result);
    });
};

// 회원정보 수정
exports.changeUser = (data, cb) => {
    const sql = `update new_user set userid='${data.userid}', name='${data.name}', pw='${data.pw}' where id=${data.id}`;
    conn.query(sql, (err, result) => {
        if(err) {
            throw err;
        }

        cb(result);
    })
}



// 컨트롤러와 연결해서 이해하기
// 1. data는 req.body
// req.body.userid, req.body.pw, req.body.name의 값을 각 필드에 넣은 것!

// 2. cb(addData.insertId) : 아래 콜백 함수에 addData.insertId를 인자로 넣어(id) 호출
// function (addData.insertId) {
//     res.send({...req.body, addData.insertId})
// }
// res.send({...req.body, addData.insertId})

// 왜?? id는 데이터베이스에 있으니까 거기서 가져오려고!
// 여기서 찾으려는 id가 addData.insertId임 (회원가입이니까 id가 새로 추가되는 상황)
// primary key니까 id 사용한 것
// addData는 query 메서드 결과 값으로 아래와 같은 객체를 가짐. 이중에서 id 부분만 꺼내 쓴 거.
// visitor insert OkPacket {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 5,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '',
//     protocol41: true,
//     changedRows: 0
//   }

// 3. 즉 data 할당과 콜백함수 부분만 컨트롤러 모듈(newRegister)로 처리하고,
// conn.query 대목의 매개변수는 query 메서드로서 사용.