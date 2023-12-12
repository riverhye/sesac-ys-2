const { User } = require("../model");

// 홈 화면 렌더 GET
exports.home = (req, res) => {
    res.render("home");
};

// 회원가입 렌더 GET
exports.signup = (req, res) => {
    res.render("signup");
};

// 회원가입 기능 POST
exports.post_signup = (req, res) => {
    User.create(req.body).then((result) => {
        res.send( {result: true} );
    }).catch((err) => {
        res.status(500).send("ERROR");
    });
};

// 로그인 렌더 GET
exports.signin = (req, res) => {
    res.render("signin");
};

// 로그인 기능 POST
exports.post_signin = (req, res) => {
    // select * from still_user where userid=?? and pw=?? limit 1
    User.findOne({
        where: {
            userid: req.body.userid,
            pw: req.body.pw
        }
    }).then((result)=> {
        res.send({
            success: true,
            id: result.id
        });
    })
};

// 로그인 프로필 (temporary) POST
// data 객체로 보낸 튜플을 프론트 단에서 데이터바인딩 해주기
exports.profile = (req, res) => {
    User.findOne({
        // select * from still_user where id=폼에 담긴 id
        where: {
            // signin에서 id 값이 담긴 input으로 profile 페이지를 렌더했으니까, 이미 profile의 body에 데이터가 담김!
            id: req.body.id
        }
    }).then((result) => {
        const data = {
            userid: result.userid,
            name: result.name,
            pw: result.pw,
            id: result.id
        }
        if([result].length > 0) {
            res.render("profile", {data: data})
        } else {
            res.redirect("signin");
        };
    });
};

exports.profile_edit = (req, res) => {
    const data = {
        ...req.body,
        id: req.params.id
    };
    // update still_user set name=??, userid=??, pw=?? where id=??
    User.update(data, {
        where: {
            id: req.params.id // body가 아님! disabled 상태
        }
    }).then((result) => {
        res.send( {result: true} );
    })
};



exports.profile_del = (req, res) => {
    // delete from still_user where id=??
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.send({result: true})
    });
};