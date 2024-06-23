import cors from "cors";
import express from "express";


const app = express()


app.use(cors());


app.use(express.json())
app.use(express.urlencoded({ extended: true }))




//router imports
import bookRouter from "./routes/book.route.js";
import studentRouter from "./routes/student.route.js";
import transactionRouter from "./routes/transaction.route.js";
import userRouter from "./routes/user.route.js";


app.use("/api/v1/users", userRouter)
app.use("/api/v1/books", bookRouter)
app.use("/api/v1/transactions", transactionRouter)
app.use("/api/v1/students", studentRouter)



export { app };

