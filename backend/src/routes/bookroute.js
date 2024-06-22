import express from 'express';
import { body, validationResult } from 'express-validator';
import Book from '../models/book.model.js';

const router = express.Router();

// Create a new book
router.post('/createbook', [
    body('bookid', 'Enter a valid bookid').isNumeric(),
    body('copyid', 'Enter a valid copyid').isNumeric(),
    body('title', 'Title is required').notEmpty(),
    body('level', 'Level is required').notEmpty(),
    body('available', 'Enter a valid availability').isBoolean(),
    body('author', 'Author is required').notEmpty(),
    body('genre', 'Genre is required').notEmpty()
], async (req, res) => {
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
});

// Get all books
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occurred");
    }
});

// Get a specific book by bookid
router.get('/books/:bookid', async (req, res) => {
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
});

// Update a book
router.put('/books/:bookid', [
    body('copyid', 'Enter a valid copyid').optional().isNumeric(),
    body('title', 'Title is required').optional().notEmpty(),
    body('level', 'Level is required').optional().notEmpty(),
    body('available', 'Enter a valid availability').optional().isNumeric(),
    body('author', 'Author is required').optional().notEmpty(),
    body('genre', 'Genre is required').optional().notEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const bookid = req.params.bookid;

    try {
        const book = await Book.findOne({ bookid });
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
        if (available) {
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
});

// Delete a book
router.delete('/books/:bookid', async (req, res) => {
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
});

export default router;