
const mainRouter= require("./routes/index.js");
const userRouter= require("./routes/user.js");
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const accountRouter = require("./account");



const app = express();
app.use(bodyParser.json());

app.use(cors());
app.use("/api/v1", mainRouter);

app.use("/api/v1/user",userRouter);


app.listen(3000)
// task in hand Create a router that routes all request s to /api/v1 

