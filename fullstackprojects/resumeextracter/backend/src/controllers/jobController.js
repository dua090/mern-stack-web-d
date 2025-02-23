import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const fetchJobs = async (req, res) => {
    try {
        const { preferences } = req.query; // Changed to preferences
        const response = await axios.get(`https://api.adzuna.com/v1/api/jobs/in/search/1`, {
            params: {
                app_id: process.env.ADZUNA_APP_ID,
                app_key: process.env.ADZUNA_APP_KEY,
                what: preferences, // Use preferences
            },
        });

        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};