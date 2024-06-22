// const mongoose = require('mongoose');
import mongoose from 'mongoose'
const {Schema} = mongoose;
const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    LiId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default : Date.now
    }
    })
    const User = mongoose.model('User', UserSchema);

    export default User;