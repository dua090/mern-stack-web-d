import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors(
    {
        origin: ["https://deploy-mern-1whq.vercel.app"],
methods: ["POST", "GET"],
credentials: true
    }
));
app.use(express.json());

app.use("/api", resumeRoutes);
app.use("/api", jobRoutes);
app.post("/upload", async (req, res) => {
    try {
        const result = await parseResume(req.file.buffer);

        console.log("Extracted Data:", result.extractedData); // Debugging step

        if (result && result.extractedData) {
            const newResume = new Resume(result.extractedData);
            await newResume.save();
            console.log("Data inserted successfully!");
            res.json({ success: true, data: result.extractedData });
        } else {
            console.error("No extracted data found!");
            res.status(400).json({ error: "No extracted data" });
        }
    } catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).json({ error: "Database save failed" });
    }
});

console.log(process.env.PORT)
const PORT = process.env.PORT||5001 ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
