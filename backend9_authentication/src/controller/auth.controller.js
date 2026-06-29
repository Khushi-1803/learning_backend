const userModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
    try {
        const { username, email, password } = req.body;

        const isUserAlreadyExist = await userModel.findOne({email})

        if (isUserAlreadyExist) {
            return res.status(409).json({
                message:"user already exist"
            })
        }

        const user = await userModel.create({
            username,
            email,
            password
        });

        const token = jwt.sign(
            { _id: user._id },
            process.env.JWT_SECRET
        );

        res.cookie("token",token)

        res.status(201).json({
            message: "User registered successfully",
            user
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
}


module.exports = {
    registerUser
};