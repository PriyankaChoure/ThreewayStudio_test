const router = require("express").Router();
const authController = require("../controllers/auth.controller");
/**
 * api- http://localhost:8082/backend/auth/register
 * 
 * req body example-
 * 
   {
    "username": "priyanka",
    "password": "123456",
    "email": "priya@gmail.com",
    "contact": 9897867859,
    "usertype": "manufecturer",
    "address": {
        "address_line_1": "1 tower abc",
        "address_line_2": "",
        "city": "chennai",
        "postal_code": "451332",
        "country":"India"
    } 
  }
 */
router.post("/register", authController.register);

router.post("/login", authController.login);

module.exports = router;
