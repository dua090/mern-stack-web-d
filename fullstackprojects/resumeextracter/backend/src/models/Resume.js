import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    skills: [String],
    preferences: String,
}, { collection: "Resume" });  // 👈 This ensures collection is "Resume"

const Resume = mongoose.model("Resume", ResumeSchema);
export default Resume;
