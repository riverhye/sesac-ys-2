const userInfos = require('../model/User')

exports.main = (req, res) => {
    res.render('index')
}

exports.login2 = (req, res) => {
  let data;
  let flag;
  for (let i=0; i<userInfos.length; i++) {
    if (req.body.userid == userInfos[i].id && req.body.password == userInfos[i].pw) {
      data = {
        isSuccess: true,
        msg: `${userInfos[i].name}님 환영합니다!`
      }
    } else {
      data = {
        isSuccess: false,
        msg: '아이디와 비밀번호를 확인하세요.'
      }
    }
  }

  res.send(data);
}

// [1] 로그인 실습 : 기본 데이터 1개만 비교
// const User = require('../model/User');
// exports.login = (req, res) => {
//     const userInfo = User.getUser();
//     let data;
//     // -------------- userInfo에 인덱싱을 추가하는 바람에 에러!
//     // userInfo = {id: une, pw: 1234}
//     if (req.body.userid == userInfo.id && req.body.password == userInfo.pw) {
//       data = {
//         isSuccess: true,
//         msg: "로그인 성공",
//       };
//     } else {
//       data = {
//         isSuccess: false,
//         msg: "아이디 또는 비밀번호를 잘못 입력했습니다.",
//       };
//     }
  
//     res.send(data);
//   };