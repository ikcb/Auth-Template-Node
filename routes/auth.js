const express = require("express");
const router = express.Router();
const { signup, signin, resetPassword, newPassword } = require("../controllers/auth");

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/forget", resetPassword);

router.post("/new-password", newPassword);

module.exports = router;
