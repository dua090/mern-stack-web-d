<<<<<<< HEAD
=======
// import mongoose from "mongoose";

// const ResumeSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String },
//     skills: [String],
//     preferences: String,
// }, { collection: "Resume" });  // 👈 This ensures collection is "Resume"

// const Resume = mongoose.model("Resume", ResumeSchema);
// export default Resume;
>>>>>>> ace7726 (Your commit message here)

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
console.log("MongoDB URI:", process.env.MONGODB_URI);
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
<<<<<<< HEAD
};
=======
};
>>>>>>> ace7726 (Your commit message here)
