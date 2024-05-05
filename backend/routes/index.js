const express = require("express");


// task in hand Create a router that routes all request s to /api/v1 


const router = express.Router();
const app= express();

router.get("/account", (req,res) => {
    res.send("Hello World");    
})

module.exports = router;