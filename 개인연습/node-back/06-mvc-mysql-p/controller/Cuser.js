const Users = require("../model/User");

exports.home = (req, res) => {
    res.render("home");
}

exports.newRegister = (req, res) => {
    // 여기서 등호가 아니라 바로 함수 실행..
    Users.newUser(req.body, (result) => {
        res.send({ ...req.body, result });
        console.log("req.body result", result);
    })
};