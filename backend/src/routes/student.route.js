import express from 'express';
import { body } from 'express-validator';
import {
    createStudent,
    deleteStudent,
    getAllStudents,
    getStudentById,
    updateStudent
} from '../controllers/student.controller.js';

const router = express.Router();


// Create a new student
router.post('/create', [
    body('student_id').notEmpty().withMessage('Student ID is required'),
    body('name').notEmpty().withMessage('Name is required'),
    body('grade').notEmpty().withMessage('Grade is required').isNumeric().withMessage('Grade must be a number')
], createStudent);


// Get all students
router.get('/all', getAllStudents);


// Get a specific student by student_id
router.get('/:id', getStudentById);


// Update a student by student_id
router.put('/update/:id', [
    body('name').optional().notEmpty().withMessage('Name is required'),
    body('grade').optional().notEmpty().withMessage('Grade is required').isNumeric().withMessage('Grade must be a number')
], updateStudent);


// Delete a student by student_id
router.delete('/delete/:id', deleteStudent);

export default router;
