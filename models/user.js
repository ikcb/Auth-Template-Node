const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      trim: true,
    },
    fullName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
    },
    twitter: String,
    linkedin: String,
    github: String,
    // base64 encoded string dp
    dp: String,
    hash: String,
    salt: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    resetToken: String,
    expireToken: Date,
  },
  { timestamps: true }
);

userSchema.virtual("password").set(function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
});

userSchema.methods.authenticate = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};

module.exports = mongoose.model("user", userSchema);
