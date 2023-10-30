const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// Main
router.get("/", controller.home);

// Sign Up
router.post("/register", controller.newRegister);

module.exports = router;