const express = require("express")
const morgan = require("morgan")
const app = express()

app.set("view engine","ejs")

app.use(morgan('dev')) //morgan is 3-paty middleware

app.use((req,res,next)=>{  //it is custom middleware
      console.log("this is middleware");
      const a =2;
      const b =3;
      console.log(a+b);
      next();
})

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/profile",(req,res)=>{
    res.send("profile page")
})

app.listen(3000)