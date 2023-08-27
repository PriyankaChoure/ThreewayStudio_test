const httpStatus = require("http-status");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const newUser = new User({
    username: userData.username,
    password: hashedPassword,
    email: userData.email,
    contact: userData.contact,
    usertype: userData.usertype,
    address: userData.address,
  });
  // console.log(Object.keys(userData.address).length);
  // if (Object.keys(userData.address).length !== 0) {
  //   newUser.address = userData.address;
  // }
  console.log(newUser);
  // newUser.markModified("address");
  const user = await newUser.save();
  // const user = await User.findOne({ email: userData.email });
  console.log("others - ", user);
  const { password, ...others } = user._doc;
  return others;
};

const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ email: email });
  console.log("login user - ", user);
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (isPasswordMatch) {
    const { password, ...others } = user._doc;
    return others;
  } else {
    throw new Error("Incorrect email or password");
  }
};
module.exports = {
  createUser,
  loginUserWithEmailAndPassword,
};
