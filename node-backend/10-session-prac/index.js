const express = require('express');
const app = express();
const port = 8000;
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true
    }
}))

app.get('/', (req, res) => {
    console.log("send session user", req.session.user)
    res.render('index', {user: req.session.user})
})

app.get('/set', (req, res) => {
    req.session.user = 'une'
    res.send('set session')
    console.log('set user', req.session.user)
})

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err) throw err;
        console.log("req.session", req.session);
        res.send({result: true, msg:'로그아웃 되었습니다.'});
    })
})

app.listen(port, () => {
    console.log(`${port} is open`)
})