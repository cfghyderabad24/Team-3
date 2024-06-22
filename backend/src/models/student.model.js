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
});

const Student = mongoose.model('Student', StudentSchema);


export default Student;