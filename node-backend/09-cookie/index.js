const express = require('express');
const app = express();
const PORT = 8000;
const cookieParser = require('cookie-parser');

app.set("view engine", "ejs");

// 쿠키 해석 & 사용
app.use(cookieParser());

// 쿠키 만료 기간 설정
// key 오탈자 주의
const cookieConfig = {
    // httpOnly: true,
    // 브라우저의 JS에서 document.cookie로 접근 못하게 막는 기능
    // 즉 서버에서만 쿠키에 접근하도록 BUT 저장은 여전히 클라이언트에
    maxAge: 30000, // ms단위로 보존 기간 설정 (ex. 하루라면 24 * 60 * 60 * 1000)
    // 모든 유저에게 일괄적으로? ex. expires: '2023-11-04T18:00'

    // -------------그외 key--------------
    // path: "/" // ex. path: "/test" -> localhost:8000/ 에서는 안 되고, localhost:8000/test/~~에서 쿠키 저장
    // secure: true // https(보안 서버)에서만 쿠키를 동작, 기본값 false
    // signed: true // 쿠키 암호화 -> req.signedCookies에서 조회, 기본값 false
};

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/set', (req, res) => {
    // 서버가 쿠키 생성하여 응답으로 보내줌
    res.cookie('key', 'value', cookieConfig)
    // 메서드명에서 보이듯 쿠키'만' 응답으로 보내는 거라 send, render 등으로 다른 응답도 보내기
    res.send('set cookie')
});

app.get('/get', (req, res) => {
    console.log("cookie: ", req.cookies);
    res.send(req.cookies);
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});