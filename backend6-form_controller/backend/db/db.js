const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose")



async function connectDB() {
   try {
     await mongoose.connect("mongodb+srv://khushi011504_db_user:backendone@cluster0.b9gbltu.mongodb.net/?appName=Cluster0")
     console.log("Database connected");
     
   } catch (error) {
    console.error("Database connection failed:");
    console.error(err);
   }
    
}
module.exports = connectDB;