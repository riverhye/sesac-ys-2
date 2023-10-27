const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

// localhost:8000/user
router.get("/", controller.main);

router.post("/login2", controller.login2);

// [1] 로그인 실습 : localhost:8000/user/login
// router.post("/login", controller.login);

module.exports = router;