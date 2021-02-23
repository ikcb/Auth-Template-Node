const User = require("../models/user");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const jwtPrivateKey = path.resolve("") + "/keys/private-key.pem";

exports.signup = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res
          .status(422)
          .json({ message: "User with that email already exist." });
      } else {
        const {
          userName,
          fullName,
          email,
          password,
          twitter,
          linkedin,
          github,
          dp,
        } = req.body;

        const _user = new User({
          userName,
          fullName,
          email,
          password,
          twitter,
          linkedin,
          github,
          dp,
        });
        _user.save().then((data) => {
          if (data) {
            return res.json({ message: "Registration Successful" });
          }
        });
      }
    })
    .catch(next);
};

exports.signin = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        if (user.authenticate(req.body.password)) {
          const cert = fs.readFileSync(jwtPrivateKey);
          const token = jwt.sign(
            { _id: user._id, role: user.role, userName: user.userName },
            cert,
            { algorithm: "RS256", expiresIn: "365d" }
          );
          const {
            userName,
            fullName,
            email,
            twitter,
            linkedin,
            github,
            dp,
          } = user;
          return res.json({
            token,
            user: {
              userName,
              fullName,
              email,
              twitter,
              linkedin,
              github,
              dp,
            },
          });
        } else {
          return res.status(422).json({
            message: "Invalid Password",
          });
        }
      } else {
        return res.status(422).json({
          message: "Something went wrong",
        });
      }
    })
    .catch(next);
};
