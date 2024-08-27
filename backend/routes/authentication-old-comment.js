const express = require('express');
const User = require('../models/User'); 
const { body, validationResult } = require('express-validator');
const router = express.Router();


// for dummy routes checking static code here 
// router.get('/',(req,res) => {
//     // check while hit the api routes its working or not in json data in url hits
//     obj = {
//         a:"this is authentication",
//         number:34
//     }
//     res.json(obj);
//     res.json([]);
//     console.log(req.body);
// })

// for business code dynamic based on project requirement

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
    let user = await User.findOne({email:req.body.email})  // its promise so use await to resolve the value or output
    if(user){
        return res.status(400).json({error:"Sorry a user with this email already exists."})
    }
    user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })
    
    // when we write the code async & await function then comment these lines one by one
    // .then(user => res.json(user))
    // .catch(err=> {console.log(err)
    //     res.json({error:"Please enter a unique value for email", message:err.message})
    // });
});

module.exports = router