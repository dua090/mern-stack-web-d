import express from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoute from "./routes/user.js"
dotenv.config();

const app = express(); // Moved this above middleware usage
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json()); // To handle JSON payloads
app.use("/api/v1/user", userRoute);
// app.post("/api/v1/user/login", (req, res) => {
//     const {email,password} = req.body;
//     console.log(email,password);
//     //save data in database
//     res.status(200).json({
//         status: "true",
//         message: "login succesfully",
//     });
// });

console.log(`Server Port: ${port}`);

app.listen(port, () => {
    console.log(`Server is running on port no. ${port}`);
});
