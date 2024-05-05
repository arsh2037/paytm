const { JWT_SECRET } = require("./config");

const jwt = require('jsonwebtoken');

const authMiddleware= (req,res,next)  => {
    const authHeader = req.headers['authorization'];    

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({error: "No token provided!"});
    }

    const token = authHeader.split(' ')[1]; 
    try {
        const decodedToken = jwt.verify(token, JWT_SECRET); 
        if (decodedToken.userId) {
            req.userId = decodedToken.userId;
            next();
        }
        else {
            return res.status(401).json({error: "Invalid token!"});
        }
    }
    catch (err){
        return res.status(401).json({error: "Invalid token!"});
    }

}

module.exports = {
    authMiddleware
}