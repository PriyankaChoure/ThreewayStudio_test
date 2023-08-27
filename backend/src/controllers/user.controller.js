const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const userService = require("../services/user.service");
// method to register new user
const getTransporter = async (req, res) => {
  try {
    const transporterList = await userService.getAllTransporter();
    if (!transporterList) {
      res.status(httpStatus.BAD_REQUEST).json("could not find transporter");
    } else {
      res.status(httpStatus.OK).json(transporterList);
    }
  } catch (err) {
    let msg = JSON.stringify(err.keyValue);

    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

module.exports = {
  getTransporter,
};
