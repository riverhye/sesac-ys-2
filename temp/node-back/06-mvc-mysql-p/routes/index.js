const express = require("express");
const router = express.Router();
const user = require("../controller/Cuser");

// Main
router.get("/", user.home);

// Sign Up render & Click
router.get("/signup", user.signup);
router.post("/signup", user.post_signup);

// Sign In render & Click
router.get("/signin", user.signin);
router.post("/signin", user.post_signin);

// Profile
// 로그인 유지하는 방법(세션?) 아직 모르니까 임시로 POST 사용
// signin.ejs에서 일반 폼 전송으로 POST /profile 작성
// 왜?? signin한 유저의 id를 숨긴 상태로 폼 전송해서 이 라우터를 render
router.post("/profile", user.profile);

// Update
router.patch("/profile/edit/:id", user.profile_edit);
// Delete
router.delete("/profile/edit/:id", user.profile_del);

module.exports = router;