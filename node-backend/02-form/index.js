const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// rq.body 해석하는 코드
// extended: true는 qs 모듈(외부 모듈) false는 queryString 모듈(내부 모듈)
app.use(express.urlencoded({extended: true}));
// aplication/json의 데이터 해석
app.use(express.json())

// localhost:8000 url 접속 응답
app.get("/", function(req, res){
    res.render("index.ejs");
});

// [1] get 요청은 url로 접속 가능
// get 요청은 req.query에 데이터가 객체로 담겨옴
// 데이터 전송 시 form 태그 이용 : method를 get으로 입력하면 get 요청
// 클라이언트가 get 요청으로 데이터를 보낼 때 url에 직접 query를 만들어 전송 가능
// 즉 url에 전송되는 데이터 노출! 개인정보는 get 요청으로 Nope!
// CRUD 중 R

app.get("/get", function(req, res){
    // req.query : client가 보낸 데이터를 담고 있음. (여기선 get 요청에 대한 데이터)
    // query : url 기본주소 뒤에 오는 주소 ex. 기본주소?id=aaa&pw=aaa (key:value로 이루어진 객체)
    console.log(req.query); // { id: 'aaa', pw: 'aaa' }
    console.log(req.query.id); // aaa
    res.send('get 요청 성공');
});

// get 요청 연습
app.get("/get2", function(req, res){
    console.log(req.query);
    res.send('get 요청 2 성공!');
});

// [2] post 요청은 url로 직접 요청 불가
// (폼 요청으로 url 바뀌긴 해도 따로 url 입력해서 이동 불가)
// req.body : post 요청의 데이터는 req.body에 담긴다.
// 그래서 url에 정보가 노출되지 않는다.
// 데이터 새로 생성하는 요청에 주로 사용. CRUD 중 C!
app.post('/post', function(req, res){
    console.log(req.body);
    res.send('post 성공!');
})

app.post('/post/ver2', function(req, res){
    console.log(req.body);
    // 파일명, 데이터
    res.render('result',{
        name: req.body.name,
        email: req.body.email
    });
})


// SW 프로그램에는 여러 목적이 있다 :
// 데이터 조회/저장/변경/삭제하려고 ... => CRUD(create, read, update, delete)
// get은 그중에서 정보를 조회할 때 사용! 쿼리 문자열에 데이터 전송.
// post는 데이터 생성하려고 어떤 정보를 보낼 때 사용! body에 데이터 전송. 숨겨서 보내기도 됨.

app.listen(PORT, function(){
    console.log(`${PORT} server open`);
});