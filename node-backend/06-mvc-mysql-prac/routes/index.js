const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// 회원가입 (home)
router.get("/", controller.home);
router.post("/register", controller.newRegister);

// 로그인 (login)
router.get("/login", controller.login);
router.post("/login", controller.findUser);

// 수정 (update)
router.get("/update", controller.update);
router.post("/update", controller.updateUser);

module.exports = router;