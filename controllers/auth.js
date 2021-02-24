const User = require("../models/user");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");
const jwtPrivateKey = path.resolve("") + "/keys/private-key.pem";
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const SENDGRID_KEY = process.env.SENDGRID_KEY;
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: SENDGRID_KEY,
    },
  })
);

exports.signup = (req, res, next) => {
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (user) {
        return res.status(422).json({
          message: "User with that email already exist.",
        });
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
        return _user.save();
      }
    })
    .then((user) => {
      if (user.email) {
        transporter.sendMail({
          to: user.email,
          from: "impavanesh@gmail.com",
          subject: "Successful Signup",
          html:
            "<h1>Welcome to T-n-Tips.</h1><br><br>You have been successfully registered to our website.<br>",
        });
        return res.json({
          message: "Registration Successful",
        });
      }
    })
    .catch(next);
};

exports.signin = (req, res, next) => {
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (user) {
        if (user.authenticate(req.body.password)) {
          const cert = fs.readFileSync(jwtPrivateKey);
          const token = jwt.sign(
            {
              _id: user._id,
              role: user.role,
              userName: user.userName,
            },
            cert,
            {
              algorithm: "RS256",
              expiresIn: "365d",
            }
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

exports.resetPassword = (req, res, next) => {
  const token = crypto.randomBytes(16).toString("hex");
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        return res.status(422).json({
          message: "User doesn't exists wwwith that email",
        });
      }
      else {
        user.resetToken = token;
        user.expireToken = Date.now() + 60 * 60 * 1000;
        return user.save();
      }   
    })
    .then((user) => {
      if(user.email) {
        transporter.sendMail({
          to: user.email,
          from: "impavanesh@gmail.com",
          subject: "Reset Password",
          html: `
            <p>You requested for password reset.</p>
            <h5>Click on this <a href="${process.env.CLIENT}/reset/${token}">link</a> to reset password.</h5>
            `,
        });
        return res.json({ message: "Check your email" });
      }
    })
    .catch(next);
};

exports.newPassword = (req, res, next) => {
  User.findOne({
    resetToken: req.body.token,
    expireToken: { $gt: Date.now() },
  })
    .then((user) => {
      if (!user) {
        return res.status(422).json({ message: "Try again. Session expired" });
      } else {
        user.password = req.body.password;
        user.resetToken = undefined;
        user.expireToken = undefined;
        return user.save();
      }   
    })
    .then((user) => {
      if(user._id) {
        return res.json({ message: "Successfully updates password" });
      }
    })
    .catch(next);
};
