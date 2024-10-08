const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
connectToMongo();
const app = express();
const port = 4000;
// Enable CORS for all routes
app.use(cors()); 
app.use(express.json());

app.get('/',(req,res) => {
    res.send("<b>Hello Saurabh Shukla Welcome in my node Js project .. !!</b>")
})
// Available Routes
app.use('/api/auth',require('./routes/authentication'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
    console.log(`iNotebook backend listening at http://localhost:${port}`)
})

