import mongoose from 'mongoose'
const {Schema} = mongoose;

const BookSchema = new Schema({
    bookid:{
        type:numeric,
        required:tru,
        unique:true
    },
    copyid:{
        type:numeric,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    level:{
        type:String,
        required:true

    }, 
    available:{
        type: numeric
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    }
})

const Book = mongoose.model('Book', BookSchema);
module.exports=Book 
