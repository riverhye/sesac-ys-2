const express = require('express');
const app = express();
const PORT = 8800;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/prac.html')
})


app.set('view engine', 'ejs');
app.set('views', './prac-views');

app.listen(PORT, function() {
    console.log(`${PORT} OPEN`)
});