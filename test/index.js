const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const router = require('./routes');
app.use('/', router);

app.listen(PORT, (req, res) => {
    console.log(`${PORT} is open`);
});