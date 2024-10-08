const jwt = require('jsonwebtoken');
const JWT_SECRET = 'forAuthenticationUserLoggedIn';

const fetchUser = (req, res, next) => {
    // Get the user from the jwt token and add id to request object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"});
    }
    try{
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.user;
        next();
    }catch(error){
        console.error(error.message);
        res.status(401).send({error:"Please authenticate using a valid token"});
    }
} 
module.exports = fetchUser;
