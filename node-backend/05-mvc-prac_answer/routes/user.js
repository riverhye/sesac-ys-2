const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// localhost:8000/user
router.get("/", controller.main);

// localhost:8000/user/login (post)
router.post("/login", controller.login);

module.exports = router;
