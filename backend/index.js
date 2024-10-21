import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

import connectDB from "./config/db.js";

const app = express();
const port = process.env.BACKEND_PORT;

import userRoutes from "./routes/user.routes.js";
import { createUser, getUser } from "./contollers/user.controller.js";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.post('/user/register',(req,res)=>{
    createUser(req,res)
})

app.post('/user/login',(req,res)=>{
    getUser(req,res)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
