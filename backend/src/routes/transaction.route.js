import express from 'express';
import { body } from 'express-validator';
import {
    createTransaction,
    deleteTransaction,
    getAllTransactions,
    getTransactionsByStudentId, // Add this line
    updateTransaction
} from '../controllers/transaction.controller.js';

const router = express.Router();


// Create a new transaction
router.post('/create', [
    body('bookId').notEmpty().withMessage('Book ID is required'),
    body('studentId').notEmpty().withMessage('Student ID is required')
], createTransaction);



// Get all transactions
router.get('/all', getAllTransactions);


// Get transactions by studentId
router.get('/student/:studentId', getTransactionsByStudentId);  // Add this route


// Update a transaction by transactionId
router.put('/update/:id', [
    body('bookId').optional().notEmpty().withMessage('Book ID is required'),
    body('studentId').optional().notEmpty().withMessage('Student ID is required')
], updateTransaction);

//update checkout date
router.put('/update/:id', [
    body('bookId').optional().notEmpty().withMessage('Book ID is required'),
    body('studentId').optional().notEmpty().withMessage('Student ID is required')
], updateTransaction);


// Delete a transaction by transactionId
router.delete('/delete/:id', deleteTransaction);

export default router;
