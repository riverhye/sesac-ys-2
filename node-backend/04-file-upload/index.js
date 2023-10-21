const express = require("express");
const multer = require("multer"); // [1] multer import (npm i multer도 해주삼)
const path = require("path"); // [1-d] path : 파일 경로를 받았을 때 파일 조작을 도와줌
// ex. 확장자 추출 path.extname("file name.확장자"), 파일 이름만 추출(path.basename("file name", 확장자))
const app = express();
const PORT = 8000;

// [전송 받은 이미지 파일 렌더하기]
// 클라이언트가 들어올 주소, express.static(현재 파일 있는 위치 : 절대 경로로 폴더 위치 알려주는 __dirname + 세부 주소)
app.use("/uploads", express.static(__dirname + "/uploads")) // 클라이언트가 uploads 폴더에 저장한 이미지 파일에 접근하도록 미들웨어 설정


// [2] multer 설정
// multer 함수를 객체로 생성multer({}) 시, 변수(upload) 안에 middleware 함수 존재 ex. single(), array(), fields()
// middleware : request와 response 사이에 존재. 응답 전에 무언가를 해야 응답이 제대로 성공할 경우 미들웨어 등록. 직접 만들기도 됨 - next() 이용.
// 파일 업로드 하면?
// multer가 임의의 문자열을 생성해 그 문자열로 파일 이름을 만듦. 확장자 없이.. but 확장자 붙여주면 볼 수 있음.
const upload = multer({
    dest: "uploads/" // file 저장 경로 지정 (destination)
});

// [2-d][2-여럿] multer 설정 상세 : 파일 경로와 파일 이름 지정
// 원하는 결과 : uploads/cat_2324343.jpeg
const uploadDetail = multer({
    storage: multer.diskStorage({
        destination: function(req, file, done){
            done(null, "uploads/");
        },
        filename: function(req, file, done){
            console.log(file); // file.originalname : cat.jpeg
            const ext = path.extname(file.originalname); // .jpeg
            const baseName = path.basename(file.originalname, ext); // cat
            const fileName = baseName + "_" + Date.now() + ext; // cat_2324343.jpeg (현재 시간을 구분할 수 있는 일련의 숫자 추가)
            
            done(null, fileName);
        }
   }),
    limits: {fileSize: 5 * 1024 * 1024} // 5MB 제한
});


app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res)=>{
    res.render("index");
});


// [3] 요청 부분과 응답 부분 사이에 multer 미들웨어 추가 (여러 개 가능)
// multer 함수를 객체로 생성multer({}) 시, 변수(upload) 안에 middleware 함수 존재 ex. single(), array(), fields()
// 이번엔 미들웨어인 single() : 파일 하나만 업로드 -> req.file 생성 / array(), fields() -> req.files 생성
// 클라이언트가 보낸 요청 중 userfile이라는 input name에 파일 데이터가 있다면
// 파일을 multer의 설정대로 저장해서 req.file 객체 생성 -> 다음 함수(function (req, res))에 넘겨줌
// 파일 없으면? 걍 패스하고 다음 함수로 넘어감.
app.post("/upload", upload.single("userfile"), (req, res)=>{
    console.log("file", req.file);
    console.log("body", req.body);
    res.send("file upload");
});

// [3-d] multer 디테일 설정 요청과 응답
// 업로드한 이미지 파일을 결과로 보여주려면?
// (1) 새로 ejs 파일 만들어 back에서 결과값 render로 보내기
// (2) app.use("클라이언트 경로 지정", express.static(__dirname + "요청 받은 이미지 파일 저장한 경로"))
// (3) ejs 방식으로 front 작성 - 단 src로 /(루트)부터 시작
app.post("/upload/detail", uploadDetail.single("userfile"), (req, res)=>{
    res.render("result", {
        src: req.file.path,
        title: req.body.title
    });
})

// [3-여럿] 파일 여럿 업로드 : input name 하나에 여러 파일 받기)
// req.files 생성
app.post("/upload/array", uploadDetail.array("userfile"), (req, res)=>{
    console.log("file 여러개", req.files);
    res.send("여러 파일 업로드 성공");
});

// [3-여럿2] 파일 여럿 업로드 : input name이 2개 이상
// 배열 안에 각각 객체로 name 지정
app.post("/upload/fields", uploadDetail.fields([{name: "userfile1"}, {name: "userfile2"}]), (req, res)=>{
    console.log("file 여러개 ver 2", req.files);
    console.log("req.body", req.body)
    res.send("여러 파일 업로드 성공 ver 2");
});

// [동적] 파일
app.post("/upload/dynamic", uploadDetail.single("userfile"), (req, res)=>{
    res.send({src: req.file.path});
})

app.listen(PORT, ()=>{
    console.log(`${PORT} server open`);
});