const express = require("express")
const authroutes = require("./routes/auth.route.js")

const app = express();
app.use(express.json())

app.use("/api/auth",authroutes)

module.exports = app