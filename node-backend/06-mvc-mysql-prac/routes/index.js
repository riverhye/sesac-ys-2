const express = require('express')
const controller = require('../controller/Cuser')
const router = express.Router()

router.get('/', controller.index)

// 회원가입
// router.get('/signup', controller.signUp);
// router.post('/signup', controller.post_signUp);

// // 로그인 (login)
// router.get('/signin', controller.signIn);
// router.post('/signin', controller.check_signIn);

// // 회원 정보 페이지 렌더
// // 회원 정보가 담긴 채로 있어야 하는데 로그인 유지 방법을 아직 배우지 않아서 임시로 POST 요청 처리
// router.post('/profile', controller.profile);

// // 수정 (update)
// router.patch('/profile/edit/:id', controller.profile_edit);
// // 탈퇴
// router.delete('/profile/edit/:id', controller.profile_del);

module.exports = router