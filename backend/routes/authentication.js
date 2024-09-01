const express = require('express');
const User = require('../models/User'); 
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'forAuthenticationUserLoggedIn';


// Create a User using: POST "/api/auth/create-user" .No login required ( Doesn't require Auth )
router.post('/create-user', [
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be at least 5 characters').isLength({min:5}),
] , async (req,res) => {
    // if there are errors, return Bad request and the errors
    const errors = validationResult(req); 
    if(!errors.isEmpty()){
        return res.status(400).json({ errors:errors.array() });
    }
    // check weather the user with this email exists already
    try{
        let user = await User.findOne({email:req.body.email})  // its promise so use await to resolve the value or output
        if(user){
            return res.status(400).json({error:"Sorry a user with this email already exists."})
        }
        // creating salt using function to secure the password ..
        const salt = await bcrypt.genSalt(10);
        // change password variable in hashing , salt , pepper  etc 
        secPass = await bcrypt.hash(req.body.password,salt);
        // create a new user
        user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:secPass,
        })
        const data = {
            user : {
                id : user.id
            }
        }
        const authToken = jwt.sign(data,JWT_SECRET);  // this is sync method not call to async Or await function 
        // console.log(authToken);
        res.json({authToken});  // after user create send auth token in api while create user successfully.
        // catch errors
    }catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred")
    }

});

module.exports = router