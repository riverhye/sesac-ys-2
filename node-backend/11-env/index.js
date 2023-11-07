const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const dotenv = require('dotenv');
// cross-env : 프로젝트 실행시키는 환경(배포/개발) 다른 env 실행
const crossEnv = require('cross-env');

// console.log(process.env);

// index.js와 같은 위치에 있는 .env 파일을 불러와서 환경변수로 사용할 수 있게 처리
dotenv.config();
// 상세 경로 설정 : index.js 경로에서 시작하여(__dirname) '~~'의 경로로 이동(join 메서드가 연결해줌)
dotenv.config({path: path.join(__dirname, './config/envs/.env')});
dotenv.config({path: path.join(__dirname, `./config/envs/${process.env.NODE_ENV}.env`)})

console.log("PASSWORD", process.env.PASSWORD);

// package.json의 scripts는 명령 단축 입력 가능한 곳

app.get('/', (req, res) => {
    res.send('hellow world')
})


app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT} : Server is open`)
})