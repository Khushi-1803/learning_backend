const { log } = require("console");
const http = require("http");

const server = http.createServer((req,res)=>{
    if (req.url == "/about") {
        res.end("About page");
    }
    if (req.url =="/profile") {
        res.end("Profile page");
    }
     res.end("Hello world")

    console.log(req.url);
    
    
});

server.listen(3000)