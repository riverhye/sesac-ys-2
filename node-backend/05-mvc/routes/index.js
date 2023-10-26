const express = require('express');
const router = express.Router(); // 라우터 모아둔 객체
const controller = require('../controller/Cmain');

// localhost:8000/comment/
// controller에서 main 함수 호출
router.get("/", controller.main);
router.get("/comments", controller.comments);

module.exports = router;