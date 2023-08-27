const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.get("/transporter", userController.getTransporter);

module.exports = router;
