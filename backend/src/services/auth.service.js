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
    isAdmin: userData.isAdmin,
  });
  console.log(Object.keys(userData.address).length);
  if (Object.keys(userData.address).length !== 0) {
    newUser.address = userData.address;
  }
  //   console.log(newUser);
  const user = await newUser.save();
  const { password, ...others } = user._doc;
  return others;
};

const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ email: email });

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
