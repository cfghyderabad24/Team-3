import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    bookId: {
        type: String,
        required: true,
        unique: true
    },
    copyId: {
        type: String,
        required: true
    },
    uniqueId: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    available: {
        type: Boolean,
        required: true,
        default: true
    },
    genre: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: false
    },
});

bookSchema.index({ bookId: 1, copyId: 1 }, { unique: true });

const Book = mongoose.model('Book', bookSchema);

export default Book;
