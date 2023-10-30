const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.home);

router.post("/register", controller.newRegister);
router.post("/login", controller.findUser);

module.exports = router;