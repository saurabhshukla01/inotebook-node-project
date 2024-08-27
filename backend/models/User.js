const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('user' , UserSchema);
// User.createIndexes();  // its create all indexes use this code ..  ( now comment this for this unique email we are right some login in authentication file )
module.exports = User;