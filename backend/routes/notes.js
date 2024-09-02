const express = require('express');
const Notes = require('../models/Notes'); 
const { body, validationResult } = require('express-validator');
const router = express.Router();
var fetchUser = require('../middlewares/fetchUser');


// ROUTE 1: Get All the notes using: GET "/api/notes/fetch-all-notes" .Login required ( Does require Auth )
router.get('/fetch-all-notes',
    fetchUser,
    async (req,res) => {
        try{
            // get all notes based on user id which user is logged in
            const notes = await Notes.find({user:req.user.id});
            res.json(notes);
        }catch(error){
            console.error(error.message);
            res.status(500).send("Internal Server Error")
        }
    }
);


// ROUTE 2: create a notes using: POST "/api/notes/create-notes" .Login required ( Does require Auth )
router.post('/create-notes',
    fetchUser,
    [
        body('title','Enter a valid title').isLength({min:3}),
        body('description','Description must be at least 5 characters').isLength({min:5}),
    ],
    async (req,res) => {
        try{
            // destructure the variable based on req body 
            const {title , description , tag} = req.body;
            // if there are errors, return Bad request and the errors
            const errors = validationResult(req); 
            if(!errors.isEmpty()){
                return res.status(400).json({ errors:errors.array() });
            }
            // create notes based on user id which user is logged in
            const notes = new Notes({
                title , description , tag , user : req.user.id
            })
            const savedNote = await notes.save();  // async & await function its send promise to resolve this 
            res.json(savedNote);
        }catch(error){
            console.error(error.message);
            res.status(500).send("Internal Server Error")
        }
    }
);

module.exports = router