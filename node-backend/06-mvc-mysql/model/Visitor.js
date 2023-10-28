// npm i mysql 모듈 설치 후 불러오기
const mysql = require("mysql");

// createConnection : mysql의 연결 정보를 받아서 mysql과 연결
// db 연결하려면? host, user, password, db이름 객체로 작성
// host : (ex. 내 서버 즉 localhost는 127.0.0.1) 외부일 경우는 클라이언트의 ip가 필요
// user : 사용자 / mysql 첫화면에 root로 등록
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user', // root는 전체권한 가진 거라 보통 다른 user로 만들어서 함
    password: 'name123$',
    database: 'sesac_test'
})


// ------------------ mysql 연결해서 쿼리로 sql문 전달하고 err 체크 후 성공 결과만 인자로 넘김 ---------------------------
// ---- 데이터 조회 ----
// 콜백함수로 왜? 비동기 처리 하려고 (sql문 작성해서 데이터 전달 -> render할 데이터 매개변수로 담기)
exports.getVisitors = (cb) => {
    // query 메서드 : 첫번째 인자로 sql문, 두번째 인자 cb 함수(에러, 결과)로 처리
    conn.query(`select * from visitor`, (err, rows)=>{
        // err 변수가 빈값(null)이 아니면 err 발생했다는 것
        if(err) {
            throw err;
        }

        console.log("visitor", rows);
        cb(rows);
    });
};

// ---- 데이터 추가 ----
// 비동기처리를 위한 cb뿐만 아니라 body에 있는 데이터도 가져와야 해(매개변수 data) 고걸 mysql db에 추가해서 전송해야 하니까
exports.insertVisitor = (data, cb) => {
    // insert into visitor (username, comment) values (??, ??)
    const sql = `insert into visitor (username, comment) values ('${data.username}', '${data.comment}')`; // 문자열('')로 만들어서

    conn.query(sql, (err, result) => {
        if(err) {
            throw err;
        }

        console.log("visitor insert", result);
        cb(result.insertId); // 결과데이터 중에 id만 필요하니까
    })
}


// ---- 데이터 삭제 ----
// delete할 id랑 콜백 처리할 거 인자로 가져옴
exports.delVisitor = (id, cb) => {
    const sql = `delete from visitor where id = ${id}`;
    conn.query(sql, (err, result) => {
        if(err) {
            throw err;
        };
        
        // let flag = false;
        // true면 1이니까
        // if(result.affectedRows) {
        //     flag = true;
        // }

        console.log("del", result);
        cb();
        // cb(true);
    })
}





// 원래 하던대로 직접 작성한 데이터
// exports.getVisitors = () => {
//     return [
//         {id: 1, username: "홍길동", comment: "내가 왔다"},
//         {id: 2, username: "이찬혁", comment: "엥"}
//     ];
// };

