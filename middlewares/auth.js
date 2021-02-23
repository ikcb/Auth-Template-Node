const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const jwtPublicKey = path.resolve("") + "/keys/public-key.pem";

exports.requireSignin = (req, res, next) => {
  if (req.headers.authorization) {
    const cert = fs.readFileSync(jwtPublicKey);
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, cert, { algorithms: ["RS256"] });
    req.user = user;
  } else {
    return res.status(422).json({ error: "Authorization required" });
  }
  next();
};

exports.adminMiddleware = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(422).json({ error: "You are not admin" });
  }
  next();
};

exports.userMiddleware = (req, res, next) => {
  if (req.user.role !== "user") {
    return res.status(422).json({ error: "You are not user" });
  }
  next();
};
