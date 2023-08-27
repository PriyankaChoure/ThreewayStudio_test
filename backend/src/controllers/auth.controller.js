const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const authService = require("../services/auth.service");
// method to register new user
const register = async (req, res) => {
  const userData = req.body;
  console.log(userData);
  try {
    const savedUser = await authService.createUser(userData);
    if (!savedUser) {
      console.log("saved user - ", savedUser);
      res.status(httpStatus.BAD_REQUEST).json("not able to create user");
    } else {
      res.status(httpStatus.OK).json(savedUser);
    }
  } catch (err) {
    let msg = JSON.stringify(err.keyValue);
    if (err.code === 11000) {
      let message = "This" + msg + "is already registerd ";
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json(message);
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
};

// method to login user
const login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await authService.loginUserWithEmailAndPassword(
      email,
      password
    );
    console.log(user);
    if (!user) {
      res.status(httpStatus.UNAUTHORIZED).json("User not found");
    }
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      {
        expiresIn: "3d",
      }
    );
    res.status(httpStatus.OK).send({ user, token });
  } catch (err) {
    console.log(err);
    res.status(httpStatus.UNAUTHORIZED).json("Wrong username or password");
  }
};
module.exports = {
  register,
  login,
};
