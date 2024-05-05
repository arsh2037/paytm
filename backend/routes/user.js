const express = require("express");
const zod = require("zod");
const User = require("../db");
const Account = require("../db");
const JWT_SECRET = require("../config");
const jwt = require('jsonwebtoken');
const { authMiddleware } = require("../middleware");


// task in hand Create a router that routes all request s to /api/v1 
const signUpSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()

})

const upadateBody = zod.object({

    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()

})

const router = express.Router();


router.get("/", (req,res) => {
    res.send("Hello User,welcome to the World");    
})
router.post('/signup',async(req,res) => {
    try {
    const today = new Date();
    const body= req.body;
    const {success} = signUpSchema.safeParse(body);
    if (!success) {
        return res.status(401).json({error: "Invalid data or email already exists!"})
    }
    const existingUser = User.findOne({username: body.username});
    if (existingUser._id) { return res.status(400).json({error: "User already exists!"});


    const user = await User.create(body);
    const token = jwt.sign({userId: User.dbUser._id}, JWT_SECRET);
const account = await Account.create({userId: User.dbUser._id, balance: Math.floor(Math.random() * 1000)})
    res.json({message: "User created successfully!", token: token});
    }


}
    catch(err) {
     console.error(err.message)
    }
  })
  
router.post('/login',async(req,res) => {
    try {
     res.json({message:"This is the login route!"})
    }
    catch(err) {
     console.error(err.message)
    }
  })

router.put("/", authMiddleware, async(req,res) => {
    const { success } = updateBody.safeParse(req.body);
    if (!success) {
        return res.status(401).json({error: "Invalid data!"});
    }
    await User.updateOne({_id: req.userId}, req.body);
    res.json({message: "User updated successfully"});
})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

  module.exports = router;