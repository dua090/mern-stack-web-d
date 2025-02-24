import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: "*", // Temporarily allow all origins (for testing)
     // Allow cookies/auth headers
  })
);

app.use(express.json());

app.use("/api", resumeRoutes);
app.use("/api", jobRoutes);
console.log(process.env.PORT)
const PORT = process.env.PORT||5001 ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
