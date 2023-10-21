const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json())
// static 파일 접근 허용 및 경로 설정
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", function(req, res){
    res.render("index")
})

// multer 설정
const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, done){
            done(null, "uploads/");
        },
        filename: function(req, file, done) {
            const userId = req.body.userid
            const ext = path.extname(file.originalname);
            // -----(index.ejs)----- id를 formData에 append 안 해서 undefined였던 것.
            const fileName = userId + '_' + Date.now() + ext 

            done(null, fileName)
        }
    })
})

// 동적 폼 전송
app.post("/signup/dynamic", upload.single("userpic"), (req, res)=>{
    console.log(req.body)
    // console.log(req.body)
    res.send({
        id: req.body.userid,
        src: req.file.path,
        name: req.body.username,
        age: req.body.userage
    })
})

// 그냥 폼 전송
app.post("/signup", upload.single("userpic"), (req, res)=>{
    // console.log("query", req.query);
    // console.log("body", req.body);
    // console.log("file", req.file);
    res.render("result", {
        pw: req.body.userpw,
        name: req.body.username,
        age: req.body.userage,
        src: req.file.path
    })
})

app.listen(PORT, function(){
    console.log(`${PORT} server open`);
});