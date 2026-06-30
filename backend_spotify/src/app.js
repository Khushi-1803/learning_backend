const express = require("express")
const cookieParseer = require("cookie-parser")
const authRoutes = require("./routes/auth.route");
const musicRoues = require("./routes/music.route")

const app = express();
app.use(express.json());
app.use(cookieParseer());

app.use("/api/auth",authRoutes)
app.use("/api/music",musicRoues)

module.exports = app