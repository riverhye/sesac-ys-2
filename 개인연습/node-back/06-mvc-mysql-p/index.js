const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("*", (req, res)=>{
    res.render("404");
});

const router = require("./routes");
app.use("/", router);

app.listen(PORT, (req, res) => {
    console.log(`Server Open : ${PORT}`);
});