const Visitor = require("../model/Visitor");

exports.home = (req, res) => {
    res.render("index");
};

// ---------- 데이터 받아와서 사용----------
// 왜 콜백함수? 데이터 가져오는 데 시간이 걸려서 render 먼저 될 테니, 데이터 가져오기->render 순서로
exports.visitor = (req, res) => {
    Visitor.getVisitors((rows)=>{
        res.render("visitor", {data: rows});
    });
    // const data = Visitor.getVisitors();
    // res.render("visitor", {data: data}); // ---- data를 data key의 value(객체)로 전달
};

// 방명록 insert : POST /visitor
exports.postVisitor = (req, res)=>{
    // console.log("req.body", req.body);
    Visitor.insertVisitor(req.body, (id)=>{
        // console.log("ctrl postVisitor", id);
        res.send({
            ...req.body,
            id,
        });
    });
};

// 방명록 delete : DELETE /visiotr/:id
exports.deleteVisitor = (req, res) => {
    //:id는 req.params에 있다
    console.log(req.params);
    Visitor.delVisitor(req.params.id, () => {
        res.send({result:true});
    })
}

// 예외처리 하면 (result) => {
//     res.send({result: result});
// });


// 방명록 update : PUT /visitor/:id
