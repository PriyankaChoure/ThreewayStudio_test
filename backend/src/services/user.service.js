const httpStatus = require("http-status");
const User = require("../models/user.model");

const getAllTransporter = async () => {
  const userList = await User.find({ usertype: "transporter" });
  return userList;
};
