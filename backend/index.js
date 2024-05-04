import express from "express";  
const mainRouter= require("./routes/index.js");
const userRouter= require("./routes/user.js");
const express = require("express");

const app = express();
app.use("/api/v1", mainRouter);

app.use("/api/v1/user",userRouter);

// task in hand Create a router that routes all request s to /api/v1 

