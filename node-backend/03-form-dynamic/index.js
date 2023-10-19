const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/', function(req, res){
    res.render('index.ejs')
})

app.get('/ajax', function(req, res){
    console.log(req.query);
    res.send(req.query);
})

app.get('/axios', function(req, res){
    console.log(req.query)
    res.send(req.query)
})

app.get('/fetch', function(req, res){
    console.log(req.query);
    res.send(req.query);
})

app.post('/ajax', function(req, res){
    console.log(req.body);
    res.send(req.body);
})

app.post('/axios', function(req, res){
    const data = {
        ...req.body,
        msg: 'Hello'
    }
    // res.send: 서버의 'data'를 클라이언트에 보낸다.
    res.send(data);
})

app.post('/fetch', function(req, res){
    console.log(req.body)
    res.send(req.body)
})

app.listen(PORT, function(){
    console.log(`${PORT} server open`);
});