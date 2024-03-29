const express = require("express");
const app = express();
const PORT = 8000;
const session = require('express-session');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true
  }
}));

// 방명록 라우터
const router = require("./routes");
app.use("/", router);

// 회원 라우터
const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});