const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const router = require("./routes");
app.use("/", router);

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

// 라우터 먼저 설정하고 "*"를 해줘야 함. 안 그럼 모든 라우터에서 404를 띄운다!
// 위에서부터 아래로, 엔진이 움직인다는 점 기억하기.
app.get("*", (req, res)=>{
    res.render("404");
});

app.listen(PORT, (req, res) => {
    console.log(`Server Open : ${PORT}`);
});