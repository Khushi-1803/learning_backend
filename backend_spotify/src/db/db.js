const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);


const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database connected sucessfully');
        
    } catch (error) {
       console.log("Databse connection error",error);
        
    }
}

module.exports = connectDB