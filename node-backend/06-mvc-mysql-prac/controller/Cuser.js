const getUser = require("../model/User");

exports.home = (req, res)=>{
    res.render("home");
}

exports.newRegister = (req, res) => {
    getUser.registerUser(req.body, (id)=>{
<<<<<<< HEAD
        // console.log("req.body만", req.body); // { userid: 'une', pw: '1234', name: '유네' }
=======
>>>>>>> f8589fa62f53b42ed5f6bb70f800f4a34a87e68c
        res.send({
            ...req.body,
            id
        })
    })
}

exports.findUser = (req, res) => {
    // model의 result가 이곳의 cb으로
    getUser.users(req.body, userData => {
        // console.log("cb result", userData);
        let result;
        if (userData.length == 0) {
            result = {
                flag: false,
                msg: '아이디나 비밀번호를 확인하세요.'
            }
        }
        else {
            result = {
                flag: true,
                msg: `${req.body.name}님 로그인 되었습니다!`
            }
        } 
        res.send(result);
    })
}