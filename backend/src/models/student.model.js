import mongoose from 'mongoose';


const { Schema } = mongoose;

// Define the sub-schema for transactions
const TransactionSchema = new Schema({
  book_id: {
    type: Number,
    required: true
  },
  checkin: {
    type: Date,
    required: true
  },
  checkout: {
    type: Date,
    required: true
  }
});

// Define the main student schema
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
  genre: {
    type: String,
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