import { validationResult } from 'express-validator';
import Transaction from '../models/transaction.model.js';

// Create a new transaction
export const createTransaction = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { bookId, studentId, checkOutDate } = req.body;


    try {
        const newTransaction = new Transaction({
            bookId,
            studentId,
            checkOutDate
        });

        await newTransaction.save();

        res.status(201).json(newTransaction);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// Get all transactions
export const getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find()
            .populate('bookId', 'title')
            .populate('studentId', 'name');

        res.json(transactions);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// Update a transaction by transactionId
export const updateTransaction = async (req, res) => {
    const { bookId, studentId, checkOutDate } = req.body;

    try {
        let transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({ error: 'Transaction not found' });
        }

        transaction.bookId = bookId;
        transaction.studentId = studentId;
        transaction.checkOutDate = checkOutDate;

        await transaction.save();

        res.json({ message: 'Transaction updated successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// Delete a transaction by transactionId
export const deleteTransaction = async (req, res) => {
    try {
        let transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({ error: 'Transaction not found' });
        }

        await transaction.remove();

        res.json({ message: 'Transaction deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};
