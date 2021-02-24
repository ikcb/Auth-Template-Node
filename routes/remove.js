const express = require("express");
const router = express.Router();
const { removeUser } = require("../controllers/remove");
const { requireSignin, adminMiddleware } = require("../middlewares/auth");

router.post("/user", requireSignin, adminMiddleware, removeUser);

module.exports = router;
