const Users = require("../model/User");

exports.home = (req, res)=>{
    res.render("home");
}

exports.newRegister = (req, res) => {
    Users.newUser = (req.body, () => {
        res.send({...req.body});
    })
};