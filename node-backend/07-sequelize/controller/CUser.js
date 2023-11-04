const {User} = require("../model")

exports.userMain = (req, res) => {
    res.render("usermain");
};

exports.signUp = (req, res) => {
    res.render("signup");
};

exports.postSignUp = (req, res) => {
    // const data = {
    //     userid: req.body.userid,
    //     pw: req.body.pw,
    //     name: req.body.name
    // };
    // 프론트에서 받은 정보와 column명-값이 동일해서 생략 가능
    // 대신 req.body 자체를 create!
    User.create(req.body).then((result) => {
        res.send(result);
    }).catch((err) => {res.status(500).send("오류 발생")});
};

exports.signIn = (req, res) => {
    res.render("signin");
};

// 로그인 성공 시 세션에 아이디 저장 
exports.postSignIn = (req, res) => {
    User.findOne({
        where: {
            userid: req.body.userid,
            pw: req.body.pw
        }
    }).then((result)=> {
        // {id: userid: pw: }
        if(result) {
            req.session.useridx = result.id
            console.log("Get req.session.idx", req.session.idx)
            res.send({success: true});
        } else {
            res.send({success: false});
        }
        // 폼 전송으로 id 보내려고 했을 때
        // if(result) res.send({success: true, id: result.id});
        // else res.send({success: false}); // 조건문 안 쓰면 id가 undefined라서 에러 뜸!
    });
};

// findOne은 true시 객체 반환, false시 null 반환
// if(result) : result가 존재한다면 true / 그외 undefined, null, false면 false

exports.profile = (req, res) => {
    User.findOne({
        // 저장된 세션 id로 찾기
        where: {
            id: req.session.useridx
        }
    }).then((result) => {
        console.log("profile result", result)
        if(result) res.render("profile", {data: result});
        else res.redirect("/user/signin");
        // 마찬가지로 result에 이미 키값이 있으므로 그냥 넘겨도 됨
        // const data = {
        //     userid: result.userid,
        //     pw: result.pw,
        //     name: result.name,
        //     id: result.id,
        //     success: true
        // }
        // if([result].length > 0) {
        //     res.render("profile", {data: data});
        // } else {
        //     res.redirect("signin");
        // };
    });
};

exports.profileEdit = (req, res) => {
    // const data = {
    //     name: req.body.name,
    //     pw: req.body.pw
    // }
    // (다시 한번) 프엔과 key값이 다를 때 재정의 필요
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        console.log("update result", result)
        // 해당값 있으면 result에 [ 1 ]이 담겨서 true로 
        // true = 1 = [1] / false = false = undefined = null
        if(result) res.send({success: true});
        else res.send({success: false});
    });
};

exports.profileDel = (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        console.log("del result", result); // 1 (or 0)
        if(result) res.send({success: true});
        else res.send({success: false});
    });
};

exports.logOut = (req, res) => {
    req.session.destroy((err) => {
        if(err) throw err;

        console.log("req.session.idx Destroyed", req.session)
        res.send({success: true, msg: "로그아웃 되었습니다."});
    })
}