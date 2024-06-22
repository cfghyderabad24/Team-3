import dotenv from "dotenv"
import { app } from './app.js'
import connectDB from './db/mongoConnection.js'
import express from 'express'
import authRoutes from './routes/auth.js';

dotenv.config({
    path: './.env'
})


app.use(express.json());

app.use('/api/auth', authRoutes);


connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }).catch((error) => {
        console.log("ERROR: ", error)
    })

