const express = require("express");
const userRouter = express.Router();
const user = require("../controller/CUser");

// 메인
userRouter.get("/", user.userMain);

// 회원가입 페이지
userRouter.get("/signup", user.signUp);
userRouter.post("/signup", user.postSignUp);

// 로그인 페이지
userRouter.get("/signin", user.signIn);
userRouter.post("/signin", user.postSignIn);

// 프로필 페이지 (폼 전송 - 세션 모를 때)
// userRouter.post("/profile", user.profile);

userRouter.get("/profile", user.profile);

userRouter.patch("/profile/edit/:id", user.profileEdit);
userRouter.delete("/profile/edit/:id", user.profileDel);

userRouter.get("/logout", user.logOut);

module.exports = userRouter;