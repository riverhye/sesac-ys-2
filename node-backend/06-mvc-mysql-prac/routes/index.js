const express = require('express');
const user = require('../controller/Cuser')
const router = express.Router();

// localhost:8000/user/~~

// 첫화면
router.get('/', user.home);

// 회원가입 (home)
router.get('/signup', user.signUp);
router.post('/signup', user.post_signUp);

// 로그인 (login)
router.get('/signin', user.signIn);
router.post('/signin', user.check_signIn);

// 회원 정보 페이지 렌더
// 회원 정보가 담긴 채로 있어야 하는데 로그인 유지 방법을 아직 배우지 않아서 임시로 POST 요청 처리
router.post('/profile', user.profile);

// 수정 (update)
router.patch('/profile/edit/:id', user.profile_edit);
// 탈퇴
router.delete('/profile/edit/:id', user.profile_del);


module.exports = router