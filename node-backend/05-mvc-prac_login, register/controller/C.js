const User = require('../model/data')

exports.main = function (req, res) {
    res.render('index');
  };

exports.login = function (req, res) {
  //---------
  const userData = User.getUser();
    let data;
    if (req.body.userid == userData.id && req.body.password == userData.pw) {
      data = {
        isSuccess: true,
        msg: "로그인 성공!",
      };
    } else {
      data = {
        isSuccess: false,
        msg: "로그인 실패!",
      };
    }
    res.send(data);
  };