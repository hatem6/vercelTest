const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT;

app.get("/test",(req,res)=>{
    res.send("hello world");
});


app.listen(port,() =>{
    console.log("Server Runs");
});