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
    User.findOne({
        where: {
            userid: req.body.userid,
            pw: req.body.pw
        }
    }).then((result)=> {
        console.log("result", result)
        res.send({
            success: true,
            id: result.id
        });
    })
};

exports.profile = (req, res) => {
    User.findOne({
        where: {
            id: req.body.id
        }
    }).then((result) => { 
        const data = {
            userid: result.userid,
            pw: result.pw,
            name: result.name,
            id: result.id,
            success: true
        }
        if([result].length > 0) {
            res.render("profile", {data: data});
        } else {
            res.redirect("signin");
        };
    });
};


exports.profileEdit = (req, res) => {
    // update table_name set name=바꿀, pw=바꿀 where id=~~
    const data = {
        name: req.body.name,
        pw: req.body.pw
    }
    User.update(data, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.send({success: true});
    });
};

exports.profileDel = (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.send({success: true});
    });
};