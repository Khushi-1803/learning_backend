
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://khushi011504_db_user:learning_backend@cluster0.vuhowei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Database connected");
  } catch (err) {
    console.error("Database connection failed:");
    console.error(err);
  }
}

module.exports = connectDB;