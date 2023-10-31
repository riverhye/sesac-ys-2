// 컨트롤러에 담기는 내용 :
// 필요 시: model에 보낼 클라이언트 측 정보 (sql문 작성 시 필요한 데이터)
// 공통: 프론트 단에 보낼 응답 결과(화면에 보여줄 정보)

const Users = require("../model/User");

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
    // 여기서 등호가 아니라 바로 함수 실행..
    Users.newUser(req.body, () => {
        res.send({ result: true });
    });
};

// 로그인 렌더 GET
exports.signin = (req, res) => {
    res.render("signin");
};

// 로그인 기능 POST
// sql에서 튜플이 통째로 넘어옴 -> req.body에 없는 키도 접근 가능
// 로그인한 유저의 value 중 PK인 id를 hidden input에 넣어 profile 렌더할 생각
// 그래서 응답에 result와 튜플의 id도 넘김
exports.post_signin = (req, res) => {
    Users.signIn(req.body, (rows) => {
        // console 찍었을 때 row.length가 1이라고는 나옴
        // 근데 if문 튕기고 else문으로 빠짐? 원인 : length 오타
        if(rows.length > 0) {
                                // row는 sql로 받아온 데이터니까 여기서 id값 가져옴
                                // 왜?? 이 id로 데이터 받아온 걸 profile에 입력해 두려고!
                                // 배열로 넘어오기 때문에 인덱싱 필수.
            res.send({result: true, id: rows[0].id});
        } else {
            res.send({result: false});
        }
    })
};

// 로그인 프로필 (temporary) POST
// data 객체로 보낸 튜플을 프론트 단에서 데이터바인딩 해주기
exports.profile = (req, res) => {
    Users.get_user(req.body.id, (row) => {
        if(row.length > 0) {
            res.render("profile", {data: row[0]});
        }
        else {
            res.redirect("/signin");
        }
    });
}

exports.profile_edit = (req, res) => {
    const data = {
        ...req.body,
        id: req.params.id // input으로 받는 게 아니라 db에만 존재
    };
    Users.editUser(data, () => {
        res.send({ result: true });
    })
};

exports.profile_del = (req, res) => {
    Users.deleteUser(req.params.id, () => {
        res.send({result: true});
    });
};