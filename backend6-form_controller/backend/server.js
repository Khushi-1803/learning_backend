const express = require("express");
const connectDB = require("./db/db.js");
const userModel = require("./models/user.models.js");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors({
    origin: "http://127.0.0.1:5500"
}));

app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

connectDB();

// Register Route
app.post("/register", async (req, res) => {
    try {
        const data = req.body;

        await userModel.create({
            name: data.name,
            email: data.email,
            password: data.password
        });

        console.log(req.body);

        res.redirect("/home");

    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
});

// Home Route
app.get("/home", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../frontend/Home.html")
    );
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});

module.exports = app;