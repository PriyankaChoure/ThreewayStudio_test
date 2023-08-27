const express = require("express");
const router = express.Router();

// Router for Authentication- register and login
const authRoute = require("./auth.routes");
router.use("/auth", authRoute);

// Route for user
const userRoute = require("./user.routes");
router.use("/user", userRoute);

module.exports = router;
