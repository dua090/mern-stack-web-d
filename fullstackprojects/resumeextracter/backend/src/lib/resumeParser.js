import axios from "axios";
import dotenv from "dotenv";
import multer from "multer";
import express from "express";
import CloudConvert from "cloudconvert";
// import mongoose from "mongoose";


dotenv.config();

const app = express();
const upload = multer({ storage: multer.memoryStorage() });
const cloudconvert = new CloudConvert(process.env.CLOUDCONVERT_API_KEY); // Set your API key in .env

// import {connectDB} from "../config/db.js";

// connectDB();

// // Define a Mongoose schema for your resume data
// const resumeSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     skills: [String],
//     preferences: String,
//     // ... other fields ...
// });

// const Resume = mongoose.model("Resume", resumeSchema);
async function convertDocxToPdf(docxBuffer) {
    try {
        const job = await cloudconvert.jobs.create({
            tasks: {
                'upload-my-file': {
                    operation: 'import/upload',
                },
                'convert-my-file': {
                    operation: 'convert',
                    input: 'upload-my-file',
                    output_format: 'pdf',
                },
                'export-my-file': {
                    operation: 'export/url',
                    input: 'convert-my-file',
                },
            },
        });

        await cloudconvert.tasks.upload(job.id, 'upload-my-file', docxBuffer);
        const converted = await cloudconvert.jobs.wait(job.id);
        const result = converted.tasks.find(t => t.name === 'export-my-file');

        const response = await axios.get(result.result.files[0].url, { responseType: 'arraybuffer' });
        const pdfBuffer = Buffer.from(response.data);

        // Save the PDF buffer to a file
        const fs = require('fs');
        fs.writeFileSync('converted.pdf', pdfBuffer);

        return pdfBuffer;
        // return Buffer.from(response.data);
    } catch (error) {
        console.error("CloudConvert error:", error);
        if (error.response && error.response.data) {
            console.error("CloudConvert response data:", JSON.stringify(error.response.data, null, 2));
        }
        throw error;
    }
}

export const parseResume = async (fileBuffer) => {
    try {
        if (!(fileBuffer instanceof Buffer)) {
            console.error("Error: fileBuffer is not a Buffer:", fileBuffer);
            return { error: { message: "Invalid file buffer", extractedData: null } };
        }

        const base64Data = fileBuffer.toString("base64");
        console.log("Base64 Data (first 100 chars):", base64Data.substring(0, 100) + "...");

        const requestData = {
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: "Extract the candidate's name, email, key skills, and job preferences. Respond with a JSON object. Do not wrap the json in code blocks.",
                        },
                        { inlineData: { mimeType: "application/pdf", data: base64Data } },
                    ],
                },
            ],
        };
        const apiKey = process.env.AI_API_KEY;

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            requestData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("Gemini Response Data:", response.data);

        if (!response.data || !response.data.candidates || response.data.candidates.length === 0) {
            return { error: { message: "No candidates found in response", extractedData: null } };
        }

        const responseText = response.data.candidates[0].content.parts[0].text;

        // Extract JSON from code block (if present)
        let jsonString = responseText;
        const jsonRegex = /```(?:json)?\n([\s\S]*?)\n```/;
        const match = jsonRegex.exec(responseText);

        if (match && match[1]) {
            jsonString = match[1].trim(); // Extract the JSON string
        }

        let extractedData;
        try {
            extractedData = JSON.parse(jsonString);
        } catch (parseError) {
            console.error("Error parsing JSON response from Gemini:", parseError, jsonString);
            return { error: { message: "Error parsing JSON from Gemini", extractedData: null } };
        }

        console.log("Extracted Resume Data:", extractedData);

        return { error: null, extractedData: extractedData };
    } catch (error) {
        console.error("Error parsing resume:", error);
        if (axios.isAxiosError(error)) {
            console.error("Axios error details:", error.response ? error.response.data : error.message);
            return { error: { message: error.response ? JSON.stringify(error.response.data) : error.message, extractedData: null } };
        } else {
            return { error: { message: error.message, extractedData: null } };
        }
    }
};
app.post("/upload-resume", upload.single("resume"), async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({ error: { message: "No file uploaded", extractedData: null } });
        }
        let fileBuffer = req.file.buffer;
        let mimeType = req.file.mimetype;
        if (fileBuffer.length === 0){
            return res.status(400).json({ error: { message: "Uploaded file is empty.", extractedData: null } });
        }
        if (mimeType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            try {
                fileBuffer = await convertDocxToPdf(fileBuffer); // Convert DOCX to PDF
            } catch (conversionError) {
                console.error("DOCX to PDF conversion error:", conversionError);
                return res.status(500).json({ error: { message: "Failed to convert DOCX to PDF", extractedData: null } });
            }
        } else if (mimeType !== 'application/pdf') {
          // If the mimetype is not docx or pdf, return error.
          return res.status(400).json({ error: { message: "Unsupported file type. Only DOCX and PDF are allowed.", extractedData: null } });
        }

        const result = await parseResume(fileBuffer);

        if (result && result.error === null) {
                const newResume = new Resume(result.extractedData);
                console.log("Data to be saved:", newResume); // Log data
                await newResume.save();
                res.json({ data: result.extractedData });
            
        }else {
            res.status(500).json(result);
        }
    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ error: { message: "Internal server error", extractedData: null } });
    }
});

export default app;


