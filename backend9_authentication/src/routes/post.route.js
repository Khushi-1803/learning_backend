const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const userModel = require("../models/user.model");

const router = express.Router();

router.post("/create", (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log(decoded);
        const user = userModel.findOne({_id:decoded.id})
        console.log(user);
        

        res.status(201).json({
            message: "Post created successfully"
        });

    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
});

module.exports = router;