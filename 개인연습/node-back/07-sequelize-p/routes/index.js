const express = require("express");
const router = express.Router();
const user = require("../controller/Cuser");

// Main
router.get("/", user.home);

// Sign Up render & Click
router.get("/signup", user.signup);
router.post("/signup", user.post_signup);

// Sign In render & Click
router.get("/signin", user.signin);
router.post("/signin", user.post_signin);

// Profile
router.post("/profile", user.profile);

// Update
router.patch("/profile/edit/:id", user.profile_edit);
// Delete
router.delete("/profile/edit/:id", user.profile_del);

module.exports = router;