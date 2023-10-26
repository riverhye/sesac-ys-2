// 데이터 받아오기
const {commentInfos} = require('../model/Comment')

// 많이 작성할 거라서 바로 함수명 main으로 export 작성
exports.main = (req, res) => {
    res.render("index")
}

exports.comments = (req, res) => {
    const commentData = commentInfos();
    res.render("comments", {
        commentInfos: commentData
    });
}