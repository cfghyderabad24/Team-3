import express from 'express';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js'; // Adjust the path if necessary

const router = express.Router();

// Router 1 for creating the user
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('LiId', 'Enter a valid LiId').isLength({ min: 6,max: 6 }),
    body('password', 'Password must be at least 8 characters').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let user = await User.findOne({ LiId: req.body.LiId });
        if (user) {
            return res.status(400).json({ error: "Sorry, a user with this LiId already exists" });
        }

        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            LiId: req.body.LiId,
        });

        res.json({ message: "User created successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occurred");
    }
});

// Router 2 for login
router.post('/login', [
    body('LiId', 'Enter a valid LiId').isLength({ min: 6,max: 6 }),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { LiId, password } = req.body;
    try {
        let user = await User.findOne({ LiId });
        if (!user) {
            return res.status(400).json({ error: "Please login with correct credentials" });
        }

        if (user.password !== password) {
            return res.status(400).json({ error: "Please login with correct credentials" });
        }

        res.json({ message: "Logged in successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
});

export default router;

