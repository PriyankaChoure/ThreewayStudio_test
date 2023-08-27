const mongoose = require("mongoose");
const config = require("../config/config");
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "can't be blank"],
      unique: true,
      index: true,
    },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    contact: { type: Number, required: true, unique: true },
    usertype: { type: String, required: true },
    address: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
