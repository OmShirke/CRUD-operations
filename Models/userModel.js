const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "pleaase add user name "],
    },
    email: {
      type: String,
      required: [true, "please add user email"],
      unique: [true, "email is already taken"],
    },
    password: {
      type: String,
      required: [true, "please add the user password"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("user", userSchema);
