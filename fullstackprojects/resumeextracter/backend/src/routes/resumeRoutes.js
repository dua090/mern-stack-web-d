import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { parseResume } from "../lib/resumeParser.js";

const router = express.Router();

router.post("/upload", upload.single("resume"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const extractedData = await parseResume(req.file.buffer);

        if (extractedData) {
            res.json({ data: extractedData });
        } else {
            res.status(500).json({ error: "Failed to parse resume" });
        }
    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;