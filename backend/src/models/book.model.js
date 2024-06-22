import mongoose from 'mongoose'
const {Schema} = mongoose;

const BookSchema = new Schema({
    bookid:{
        type:Number,
        required:true,
        unique:true
    },
    copyid:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    level:{
        type:Number,
        required:true

    }, 
    available:{
        type:Boolean,
        required:true
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
export default Book
