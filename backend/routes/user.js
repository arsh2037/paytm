const express = require("express");


// task in hand Create a router that routes all request s to /api/v1 


const router = express.Router();


router.get("/", (req,res) => {
    res.send("Hello User,welcome to the World");    
})