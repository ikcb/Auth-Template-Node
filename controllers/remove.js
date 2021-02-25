const User = require("../models/user");

exports.removeUser = (req, res, next) => {
  console.log(req.body.userId);
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
    ],
  };
  User.findOneAndRemove(condition)
    .then((user) => {
      if (user.email) {
        return res.json({ message: "User removed successfully", user });
      }
    })
    .catch(next);
};
