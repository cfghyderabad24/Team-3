import express from 'express';
import { body } from 'express-validator';
import {
    createBook,
    deleteBook,
    getAllBooks,
    getBookById,
    updateBook
} from '../controllers/books.controller.js';

const router = express.Router();


router.post('/createbook', [
    body('bookid', 'Enter a valid bookid').isNumeric(),
    body('copyid', 'Enter a valid copyid').isNumeric(),
    body('title', 'Title is required').notEmpty(),
    body('level', 'Level is required').notEmpty(),
    body('available', 'Enter a valid availability').isBoolean(),
    body('author', 'Author is required').notEmpty(),
    body('genre', 'Genre is required').notEmpty()
], createBook);


router.get('/books', getAllBooks);


router.get('/books/:bookid', getBookById);


router.put('/books/:bookid', [
    body('copyid', 'Enter a valid copyid').optional().isNumeric(),
    body('title', 'Title is required').optional().notEmpty(),
    body('level', 'Level is required').optional().notEmpty(),
    body('available', 'Enter a valid availability').optional().isBoolean(),
    body('author', 'Author is required').optional().notEmpty(),
    body('genre', 'Genre is required').optional().notEmpty()
], updateBook);


router.delete('/books/:bookid', deleteBook);

export default router;
