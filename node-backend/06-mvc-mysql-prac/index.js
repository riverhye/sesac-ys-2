const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const router = require("./routes");
app.use("/user", router);

app.get("*", (req, res)=>{
    res.render("404");
});

app.listen(PORT, (req, res)=>{
    console.log(`${PORT} Server Open`);
});