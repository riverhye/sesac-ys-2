const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/', function(req, res){
    res.render('app.ejs')
})

app.get('/get', function(req, res){
    console.log(req.query);
    res.send(req.query);
})

app.post('/post', function (req, res){
    const id = 'aaa'
    const pw = '1234'
    if(id === req.body.id && pw === req.body.pw) {
        res.send(true)
    } else {
        res.send(false)
    }
    // id === req.body.id && pw === req.body.pw ? res.send(true) : res.send(false)
    res.send(req.body)
})

app.listen(PORT, function(){
    console.log(`${PORT} server open`);
});