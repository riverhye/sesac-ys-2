const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const router = require('./routes/index');
app.use('/user', router);

// register 부분
//   app.get("/register", function (req, res) {
//     console.log(req.query);
//     res.send(req.query);
//   });
  

app.listen(PORT, (req, res)=>{
    console.log(`${PORT} : server OPEN`);
});