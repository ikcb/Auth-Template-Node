const express = require("express");
const router = express.Router();
const { signup, signin, resetPassword } = require("../controllers/auth");

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/forget", resetPassword);

module.exports = router;
