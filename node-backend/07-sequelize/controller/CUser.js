const {User} = require("../model")

exports.userMain = (req, res) => {
    res.render("usermain");
};

exports.signUp = (req, res) => {
    res.render("signup");
};

exports.postSignUp = (req, res) => {
    // insert into new_user userid=?? pw=?? name=??
    const data = {
        userid: req.body.userid,
        pw: req.body.pw,
        name: req.body.name
    };
    User.create(data).then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send("오류 발생")});
};

exports.signIn = (req, res) => {
    res.render("signin");
};

exports.postSignIn = (req, res) => {
    // select * from new_user where userid=?? and pw=?? limit 1
    User.findOne({
        where: {
            userid: req.body.userid,
            pw: req.body.pw
        }
    }).then((data) => {
        res.send({
            result: true,
            data
        });
    });
};

exports.profile = (req, res) => {
    res.render("profile");
};
