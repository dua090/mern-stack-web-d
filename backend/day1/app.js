import express from "express";
import dotenv from "dotenv";
import connectdb from "./db/database.js";
const app = express();
dotenv.config();
connectdb();

app.use(express.json())

const port = process.env.port || 8000;


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})