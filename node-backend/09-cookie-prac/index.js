const express = require('express');
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs'); 
app.use(cookieParser());

const cookieConfig = {
    maxAge: 24 * 60 * 60 * 1000
}

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/cookie', (req, res) => {
    if(req.body.data) {
        res.cookie('modalExpired', '1', cookieConfig);
        res.send(true);
    } else if (req.cookies){
        res.send(true)
    }else {
        console.log("쿠키 요청 없음")
    }
})

app.listen(port, () => {
    console.log(`${port} is open`)
})