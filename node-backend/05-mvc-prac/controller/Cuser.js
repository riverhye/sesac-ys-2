const getUser = require('../model/user');

exports.main = (req, res) => {
    res.render('index')
}

exports.login = (req, res) => {
    const userInfo = getUser();
    let data;
    if (req.body.userid == userInfo[0].id && req.body.password == userInfo[0].pw) {
      data = {
        isSuccess: true,
        msg: "로그인 성공",
      };
    } else {
      data = {
        isSuccess: false,
        msg: "아이디 또는 비밀번호를 잘못 입력했습니다.",
      };
    }
  
    res.send(data);
  };