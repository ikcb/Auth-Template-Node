const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.getUserInfo = (req, res, next) => {
  const condition = {
    $or: [
      {
        _id: req.body.userId,
      },
      {
        userName: req.body.userName,
      },
      {
        email: req.body.email,
      },
      {},
    ],
  };
  User.find(condition)
    .then((users) => {
      if (users) {
        return res.json({ users });
      }
    })
    .catch(next);
};
