const express = require("express");
const router = express.Router();
const { getUserInfo } = require("../controllers/info");
const { requireSignin, adminMiddleware } = require("../middlewares/auth");

router.get("/user", requireSignin, adminMiddleware, getUserInfo);

module.exports = router;
