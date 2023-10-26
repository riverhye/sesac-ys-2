exports.commentInfos = function() {
    // mysql 연결했다고 가정 : select * from comment;
    return [
        {id: 1, userid: 'une', date: '2023-10-26', comment: "hello"},
        {id: 2, userid: 'gina', date: '2023-10-28', comment: "world"}
]
}