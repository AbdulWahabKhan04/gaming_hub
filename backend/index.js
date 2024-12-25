import express from 'express';
import mongoose from 'mongoose';
import authRouter from "./Routers/authRouter.js"

const app = express();

app.use("/api/auth",authRouter)


mongoose.connect("mongodb://localhost:27017/").then(() => {
    console.log("Connected to Database");
}).catch(err => console.log(err));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});