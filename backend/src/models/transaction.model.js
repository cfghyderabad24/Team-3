import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    transactionId: {
        type: String,
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
}, { timestamps: true });

transactionSchema.pre('save', async function (next) {
    try {
        if (!this.transactionId) {
            this.transactionId = generateTransactionId();
        }
        const existingTransaction = await this.constructor.findOne({ transactionId: this.transactionId });
        if (existingTransaction) {
            return next(new Error('Transaction ID already exists. Please try again.'));
        }
        next();
    } catch (err) {
        next(err);
    }
});

function generateTransactionId() {
    return Math.random().toString(36).substr(2, 9); // Generate a random string for transactionId
}

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
