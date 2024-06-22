import express from "express"

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))




//router imports



export { app }
