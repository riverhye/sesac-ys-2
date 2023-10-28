const express = require("express");
const app = express();
const PORT = 8000;
const router = require("./routes") // index.js는 폴더명까지 해도 자동 매칭.

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", router);

app.get("*", (req, res)=>{
    res.render("404");
});

app.listen(PORT, (req, res)=>{
    console.log(`${PORT} Server Open`);
});