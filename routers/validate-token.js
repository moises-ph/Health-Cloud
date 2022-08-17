const jwt = require('jsonwebtoken');

// middleware to validate tokens

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    if(!token) return res.status(401).json({msg: 'Access denied. No token provided'});
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }
    catch (err){
        res.status(400).json({msg: 'Invalid token'});
    }
};

module.exports = verifyToken;