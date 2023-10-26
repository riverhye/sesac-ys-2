const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); // 템플릿 엔진을 ejs로
app.use(express.urlencoded({extended: true})); // body-parser
app.use(express.json());


// app.get("/", (req, res)=>{
//     res.render("index");
// });

const router = require('./routes'); // 폴더만 접근하면 알아서 내부 index.js로 연결됨 (아닌 경우는 다 써줘야)
// use는 미들웨어 걸 때 사용

// -----------app.use("/", router);
// "/" -> 기본 라우터 end point부터 routers 폴더의 index.js에 작성한 router.get('/이거') 간주.
// 즉 localhost:8000/이거 로 인지
// 헷갈리지 않게 아래 예시로 end point 작성
app.use("/", router);
// localhost:8000/~~~

// top to bottom으로 처리하기 때문에 첫번째 미들웨어에서 해당 라우터 찾으면 다음 라우터는 조회하지 않음.
// 폴더별로 나누면 중복 라우터 작성 주의


// 설정한 라우터 외의 주소로 get 요청 시
// 분리할 수 있긴 하지만.. 3줄이라서 걍 여따가 박아둠.
app.get("*", (req, res)=>{
    res.send("페이지를 찾을 수 없습니다.");
})

app.listen(PORT, ()=>{
    console.log(`${PORT} server open`);
});