const getUser = require("../model/User");

exports.home = (req, res)=>{
    res.render("index");
}

exports.newRegister = (req, res) => {
    getUser.registerUser(req.body, (id)=>{
        res.send({
            ...req.body,
            id
        })
    })
}

exports.findUser = (req, res) => {
    // model의 result가 이곳의 cb으로
    getUser.users(req.body, (result)=>{
        // 동일하다는 조건을 여기서 확인
        for(let i=0; i<result.length; i++) {
            if(req.body.id == result[i].id && req.body.pw == result[i].pw) {
                data = {msg: `${result[i].name}님 안녕하세요~!`}
            } else {
                data = {msg: `아이디나 비밀번호를 확인하세요.`}
            }
        }
        console.log(result);
        res.send(data);
    })
}