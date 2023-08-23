const express = require("express");
const router = express.Router();

// Router for Authentication- register and login
const authRoute = require("./auth.routes");
router.use("/auth", authRoute);

module.exports = router;