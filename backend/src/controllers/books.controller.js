import { validationResult } from 'express-validator';
import Book from '../models/book.model.js';


const createBook = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { bookid, copyid, title, level, available, author, genre } = req.body;
    const uniqueid = `${bookid}-${copyid}`;

    try {
        const newBook = new Book({
            bookid,
            copyid,
            uniqueid,
            title,
            level,
            available,
            author,
            genre
        });

        await newBook.save();

        res.json({ message: "Book created successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occurred");
    }
};


const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occurred");
    }
};


const getBookById = async (req, res) => {
    const bookid = req.params.bookid;

    try {
        const book = await Book.findOne({ bookid });
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occurred");
    }
};


const updateBook = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const bookid = req.params.bookid;

    try {
        let book = await Book.findOne({ bookid });
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        const { copyid, title, level, available, author, genre } = req.body;

        if (copyid) {
            book.copyid = copyid;
        }
        if (title) {
            book.title = title;
        }
        if (level) {
            book.level = level;
        }
        if (available !== undefined) {
            book.available = available;
        }
        if (author) {
            book.author = author;
        }
        if (genre) {
            book.genre = genre;
        }

        await book.save();

        res.json({ message: "Book updated successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occurred");
    }
};


const deleteBook = async (req, res) => {
    const bookid = req.params.bookid;

    try {
        const book = await Book.findOne({ bookid });
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        await book.remove();

        res.json({ message: "Book deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occurred");
    }
};

export {
    createBook, deleteBook, getAllBooks,
    getBookById,
    updateBook
};

