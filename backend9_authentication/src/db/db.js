const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(
            "mongodb+srv://khushi011504_db_user:backendtwo@cluster0.nt0xptz.mongodb.net/?appName=Cluster0"
        );

        console.log("Database connected");
    } catch (error) {
        console.error("Database connection failed");
        console.error(error);
    }
}

module.exports = connectDB;