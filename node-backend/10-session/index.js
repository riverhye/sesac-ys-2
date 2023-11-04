const express = require('express');
const app = express();
const port = 8000;
const session = require('express-session');

// 세션은 객체를 생성한다
// 브라우저 종료 전까지 저장하므로, cookie에서 시간 제한 두기 가능
// ex. 10분 동안 활동 없으면 자동 로그아웃
app.use(session({
    secret: 'secret key',
    // 모든 요청마다 세션 다시 저장할지?
    resave: false,
    // 클라이언트가 처음 접속할 때 세션 초기화?
    saveUninitialized: true,

    // cookie에서 사용하던 속성을 쓰려면
    cookie: {
        httpOnly: true, // 클라이언트에서 document.cookie 접속 못함
        maxAge: 30000
    },
    // secure: true // https에서만 동작
}));

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/set', (req, res) => {
    // 세션 아이디는 클라이언트별로 존재해서 클라이언트에서 전달하니까 req.session으로
    console.log("1: ", req.session)
    // req.session.key
    req.session.user = 'une'
    console.log("2: ", req.session)
    res.send("set session");
})

app.get('/get', (req, res) => {
    // if(req.session.user) {
    //     res.render("profile", {'유저의 고유': '값'})
    // } else {
    //     res.redirect("/sigin");
    // }
    console.log(req.session.user);
    res.send({id:"", user: req.session.user});
})

app.listen(port, () => {
    console.log(`${port} is open`)
})