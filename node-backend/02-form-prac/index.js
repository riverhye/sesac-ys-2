const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'index.ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/', function(req, res){
    res.render('index.ejs')
})
app.get('/get', function(req, res){
    console.log(req.query);
    res.send('회원가입 완료');
})

app.post('/post', function(req, res){
    console.log(req.body);
    res.render('result.ejs', {
        name: req.body.name,
        gender: req.body.gender
    });
})

app.listen(PORT, function(req, res){
    console.log(`$Server Open : ${PORT}`);
})