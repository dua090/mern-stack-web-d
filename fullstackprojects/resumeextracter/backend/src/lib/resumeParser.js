import axios from "axios";
import dotenv from "dotenv";
import multer from "multer";
import express from "express";
import CloudConvert from "cloudconvert";
import Resume from "../models/Resume.js";

dotenv.config();

const app = express();
const upload = multer({ storage: multer.memoryStorage() });
const cloudconvert = new CloudConvert(process.env.CLOUDCONVERT_API_KEY);

async function convertDocxToPdf(docxBuffer) {
    try {
        const job = await cloudconvert.jobs.create({
            tasks: {
                'upload-my-file': { operation: 'import/upload' },
                'convert-my-file': { operation: 'convert', input: 'upload-my-file', output_format: 'pdf' },
                'export-my-file': { operation: 'export/url', input: 'convert-my-file' }
            }
        });

        await cloudconvert.tasks.upload(job.id, 'upload-my-file', docxBuffer);
        const converted = await cloudconvert.jobs.wait(job.id);
        const result = converted.tasks.find(t => t.name === 'export-my-file');

        if (!result?.result?.files?.[0]?.url) {
            throw new Error("Conversion failed: No file URL returned.");
        }

        const response = await axios.get(result.result.files[0].url, { responseType: "arraybuffer" });
        return Buffer.from(response.data);
    } catch (error) {
        console.error("CloudConvert error:", error);
        throw new Error("Failed to convert DOCX to PDF.");
    }
}

export const parseResume = async (fileBuffer) => {
    try {
        if (!(fileBuffer instanceof Buffer)) {
            throw new Error("Invalid file buffer.");
        }

        const base64Data = fileBuffer.toString("base64");

        const requestData = {
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: "Extract candidate details as JSON (name, email, skills, job preferences)." },
                        { inlineData: { mimeType: "application/pdf", data: base64Data } }
                    ]
                }
            ]
        };

        const apiKey = process.env.AI_API_KEY;
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            requestData,
            { headers: { "Content-Type": "application/json" } }
        );

        const responseText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!responseText) throw new Error("No data received from Gemini API.");

        let extractedData;
        try {
            extractedData = JSON.parse(responseText.replace(/```json\n?|```/g, "").trim());
        } catch (parseError) {
            throw new Error("Invalid JSON response from Gemini API.");
        }

        return { extractedData };
    } catch (error) {
        console.error("Error parsing resume:", error);
        return { error: { message: error.message, extractedData: null } };
    }
}

app.post("/upload", upload.single("resume"), async (req, res) => {
    try {
        if (!req.file || req.file.buffer.length === 0) {
            return res.status(400).json({ error: "Invalid file upload." });
        }

        let fileBuffer = req.file.buffer;
        const mimeType = req.file.mimetype;

        if (mimeType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            fileBuffer = await convertDocxToPdf(fileBuffer);
        } else if (mimeType !== "application/pdf") {
            return res.status(400).json({ error: "Only PDF and DOCX files are supported." });
        }

        const result = await parseResume(fileBuffer);

        if (result?.extractedData) {
            const newResume = new Resume(result.extractedData);
            await newResume.save();
            return res.json({ data: result.extractedData });
        } else {
            return res.status(500).json({ error: "Resume parsing failed." });
        }
    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ error: "Internal server error." });
    }
});

export default app;
