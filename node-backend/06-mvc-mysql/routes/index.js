const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

// 홈
router.get("/", controller.home);

// 방명록 페이지
router.get("/visitors", controller.visitor);

// 방명록 등록
router.post("/visitor", controller.postVisitor);

// 방명록 삭제 (수정과 url 같지만 방식이 달라서 결국 다름)
router.delete("/visitor/:id", controller.deleteVisitor);


// 방명록 수정
// router.patch("/visitor/:id", controller.updateVisitor);


module.exports = router;