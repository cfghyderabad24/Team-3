import { validationResult } from 'express-validator';
import Student from '../models/student.model.js'; // Assuming Student model exists

// Create a new student
export const createStudent = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { student_id, name, grade } = req.body;

    try {
        const newStudent = new Student({
            student_id,
            name,
            grade
        });

        await newStudent.save();

        res.status(201).json(newStudent);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// Get all students
export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// Get a specific student by student_id
export const getStudentById = async (req, res) => {
    const { id } = req.params;

    try {
        const student = await Student.findById(id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// Update a student by student_id
export const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { name, grade } = req.body;

    try {
        let student = await Student.findById(id);

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        student.name = name;
        student.grade = grade;

        await student.save();

        res.json({ message: 'Student updated successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// Delete a student by student_id
export const deleteStudent = async (req, res) => {
    const { id } = req.params;

    try {
        let student = await Student.findById(id);

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        await student.remove();

        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

