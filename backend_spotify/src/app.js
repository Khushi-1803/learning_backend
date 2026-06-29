const express = require("express")
const cookieParseer = require("cookie-parser")
const authRoutes = require("./routes/auth.route");

const app = express();
app.use(express.json());
app.use(cookieParseer());

app.use("/api/auth",authRoutes)

module.exports = app