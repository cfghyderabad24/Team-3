import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    transactionId: {
        type: String,
        required: true,
        unique: true
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    checkInDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    checkOutDate: {
        type: Date
    },
    transactionStatus: {
        type: Boolean,
        required: true,
        default: false
    }
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
