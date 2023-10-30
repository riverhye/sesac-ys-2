const getUser = require("../model/User");

// 첫화면
exports.home = (req, res)=>{
    res.render("home");
}

// 회원가입
exports.newRegister = (req, res) => {
    getUser.registerUser(req.body, (id)=>{
        // console.log("req.body만", req.body); // { userid: 'une', pw: '1234', name: '유네' }
        res.send({
            ...req.body,
            id
        })
    })
}


// 로그인 화면
exports.login = (req, res) => {
    res.render("login");
}

// 로그인(회원정보 조회)
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


// 회원 정보 수정/삭제 화면
exports.update = (req, res) => {
    res.render("update");
}

// 회원 정보 가져오기
exports.get_user = (req, res) => {
    getUser.changeUser(req.body.id, (result) => {
        if (result.length > 0) res.render("update");
        else res.redirect("/register");
    })
}

// 회원 정보 수정
exports.updateUser = (req, res) => {
    const data = {
        ...req.body,
        id: req.params.id
    }
    getUser.changeUser(data, () => {
        res.send("수정 완료");
    })
}