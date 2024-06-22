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

transactionSchema.pre('save', async function (next) {
    try {

        const transactionId = Math.random().toString(36).substr(2, 9);


        const existingTransaction = await this.constructor.findOne({ transactionId });
        if (existingTransaction) {

            return next(new Error('Transaction ID already exists. Please try again.'));
        }

        this.transactionId = transactionId;
        next();
    } catch (err) {
        next(err);
    }
});


const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;