const express = require("express")
const authcontroller = require("../controller/auth.controller.js")

const router = express.Router();

router.post("/register",authcontroller.registerUser)

module.exports = router