const express = require('express');
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
router.get('/',(req,res) => {
    console.log(req.body);
    res.send("Hello");
});

module.exports = router