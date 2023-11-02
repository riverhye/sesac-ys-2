const Visitor = require("../model") // index.js 가져옴
// db 중에서 Visitor 함수만 델꼬옴

exports.home = (req, res) => {
  res.render("index");
};

// GET /visitors => 기존 방명록 전체 조회 후 render("visitor.ejs")
exports.visitor = (req, res) => {
    // All이니까 배열로 담김
    // 조건 걸려면 객체로 인자 넘김
    // select * from visitor;
    Visitor.findAll().then((result)=>{
        // 아래 같은 배열이길 기대하며 콘솔을 찍어보자
        // [{ id: 1, username: '홍길동', comment: '내가 왔다' }, { id: 2, username: '이찬혁', comment: '엥' }]
        console.log("findAll result: ", result);
        // 근데 dataValues에 {} 가 담김.
        console.log("0 index's username: ", result[0].username);
        // result[0].dataValues.username가 아니고? dataValues는 생략 가능!
        // 그래서 ejs 파일도 값 변경하지 않아도 됨
        res.render("visitor", {data: result});
        // 그냥 result 통으로 넘겨도 알아서 {id: , username: , comment: } 담김
    });
};

// POST /visitor => 방명록 insert
exports.postVisitor = async (req, res) => {
    const data = {
        // create 할 때는 column key 그대로 사용
        username: req.body.username,
        comment: req.body.comment
    }
    const createVisitor = await Visitor.create(data).catch((err) => {});
    res.send(createVisitor);
    // 프론트에서 input 비우기
}

//     // then 메서드
//     Visitor.create(data).then((result) => {
//         console.log("create result: ", result);
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//         // 에러 응답코드 기입 가능
//         res.status(500).send("오류 발생");
//     });

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
    Visitor.destroy({
        // 조건 걸 땐 객체 안에 where key에 value도 객체로
        where: {
            id: req.params.id
        }
    }).then((result) => {
        console.log("destroy result", result);
        res.send({ result: true });
    });
};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
    // select * from visitor where id = ?? limit 1
    Visitor.findOne({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        console.log("findOne result: ", result);
        res.send(result);
    });
};

// PATCH /visitor/:id => 방명록 수정
// body 전체를 넘기기로 했음 (ejs, router 참고)
exports.patchVisitor = (req, res) => {
    // update({어케 업뎃?}, {조건})
    const data = {
        username: req.body.username,
        comment: req.body.comment
    };
    // update visitor set username= '??', comment='??' where id = ??;
    Visitor.update(data, {
        where: {
            id: req.body.id
        }
    }).then((result) => {
        console.log("update result: ", result);
        res.send({ result: true });
    });
};


exports.getTest = (req, res) => {
    // select username from visitor where id = _ limit 1
    Visitor.findAll({
        attributes: ["username", "id"],
        // where: {
        //     id: req.params.id
        // },
        order: [["username", "asc"]]
    }).then((result) => {
        console.log("getTest result: ", result)
        res.send(result);
    });
};
