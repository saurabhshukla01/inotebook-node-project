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
            const {title , description , tag } = req.body;
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


// ROUTE 3: update a notes using: PUT "/api/notes/update-notes" .Login required ( Does require Auth )
router.put('/update-notes/:id',
    fetchUser,
    async (req,res) => {
        try{
            // destructure the variable based on req body 
            const {title , description , tag} = req.body;
            // create a newNote object
            const newNote = {};
            if(title){newNote.title = title};
            if(description){newNote.description = description};
            if(tag){newNote.tag = tag};
            // find the note to be updated and update it
            let note = await Notes.findById(req.params.id)
            if(!note){
                res.status(404).send("Not Found");
            }
            // check user is exists which want to update notes
            if(note.user.toString() !== req.user.id){
                res.status(401).send("Not Allowed");
            }
            // want to update if any thing is correct
            note = await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
            res.json(note);
        }catch(error){
            console.error(error.message);
            res.status(500).send("Internal Server Error")
        }
    }
);

// ROUTE 4: delete a notes using: DELETE "/api/notes/delete-notes" .Login required ( Does require Auth )
router.delete('/delete-notes/:id',
    fetchUser,
    async (req,res) => {
        try{
            // find the note to be deleted and delete it
            let note = await Notes.findById(req.params.id)
            if(!note){
                res.status(404).send("Not Found");
            }
            // Allow deletion only if user owns this Note
            if(note.user.toString() !== req.user.id){
                res.status(401).send("Not Allowed");
            }
            // want to update if any thing is correct
            note = await Notes.findByIdAndDelete(req.params.id);
            res.json({"Success":"Notes has been deleted",note:note});
        }catch(error){
            console.error(error.message);
            res.status(500).send("Internal Server Error")
        }
    }
);

module.exports = router