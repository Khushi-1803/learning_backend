const express = require("express");
const authcontroller = require("../controllers/auth.controlleers.js")

const router = express.Router()

router.post("/register",authcontroller.registerUser)

module.exports = router
