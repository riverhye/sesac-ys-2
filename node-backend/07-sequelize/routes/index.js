const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");


// temporary router
// router.get("/visitor/:id", ~~) 는 visitor 다음에 아무거나 와도 됨
// 오류 생길 우려가 있어서 제일 상단에 위치
router.get("/visitors/test/:id", controller.getTest);



// ~~~~~:8000 -> index.ejs render
router.get("/", controller.home);

// ~~~~~:8000/visitor -> visitor.ejs render
router.get("/visitors", controller.visitor);

// 방명록 등록
router.post("/visitor", controller.postVisitor);

// 방명록 수정
router.patch("/visitor", controller.patchVisitor);

// 방명록 하나 조회
// 프론트엔드 단에서 보이는 정보는 브라우저에서 쉽게 조작할 수 있으므로
// 실제 정보가 바뀌진 않더라도.. 확실하게 하는 게 좋으니까
router.get("/visitor/:id", controller.getVisitorById);
// 방명록 삭제
router.delete("/visitor/:id", controller.deleteVisitor);



module.exports = router;
