import express from 'express';
import mongoose from 'mongoose';
import authRouter from "./Routers/authRouter.js"
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

const app = express();

app.use(express.json());
app.use(cookieParser());

dotenv.config()

app.use("/api/auth",authRouter)


mongoose.connect("mongodb://localhost:27017/").then(() => {
    console.log("Connected to Database");
}).catch(err => console.log(err));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});