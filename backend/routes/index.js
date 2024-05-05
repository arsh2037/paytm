const express = require("express");

const userRouter = require("./user");
const accountRouter = require("./accounts");


// task in hand Create a router that routes all request s to /api/v1 
const router = express.Router();
const app= express();


router.use("/account", accountRouter);
router.use("/account", accountRouter);
module.exports = router;