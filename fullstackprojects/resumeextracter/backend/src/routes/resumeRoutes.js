import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { parseResume } from "../lib/resumeParser.js";

const router = express.Router();

router.post("/upload", upload.single("resume"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        const extractedData = await parseResume(req.file.buffer);

        if (!extractedData) {
            return res.status(500).json({ success: false, message: "Failed to parse resume" });
        }

        res.json({ success: true, message: "Resume parsed successfully", data: extractedData });

    } catch (error) {
        console.error("Upload error:", error.message);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
});

export default router;
