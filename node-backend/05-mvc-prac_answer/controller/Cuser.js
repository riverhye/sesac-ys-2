const {userObj} = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {

  const userData = userObj;
  let data;
  for(let i=0; i<userData.length; i++) {
    if (req.body.userid == userData[i].id && req.body.password == userData[i].pw) {
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
  }

// userData
//[
//  { id: 'spreatics', pw: '12341234', name: '코딩온' },
//  { id: 'codee', pw: '4321', name: '코디' },
//  { id: 'lily', pw: '1234', name: '릴리' }
//]

