const express = require("express");
const connectDB = require("./db/db.js");
const app = express();

app.use(express.json());

const PORT = 3000;
connectDB()

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});

module.exports = app;