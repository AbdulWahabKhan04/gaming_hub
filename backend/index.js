import express from 'express';
import mongoose from 'mongoose';
import authRouter from "./Routers/authRouter.js"
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

dotenv.config()

app.use("/api/auth",authRouter)


mongoose.connect("mongodb://localhost:27017/gamingHUB").then(() => {
    console.log("Connected to Database");
}).catch(err => console.log(err));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});