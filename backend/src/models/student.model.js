import mongoose from 'mongoose';

const { Schema } = mongoose;

const StudentSchema = new Schema({
    student_id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    transaction_history: {
        type: [TransactionSchema],
        required: true,
        default: []
    },
    current_transaction: {
        type: [TransactionSchema],
        required: true,
        default: []
    }
});

const Student = mongoose.model('Student', StudentSchema);


export default Student;