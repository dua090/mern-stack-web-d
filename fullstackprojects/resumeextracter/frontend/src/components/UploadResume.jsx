import React, { useState } from "react";
import axios from "axios";

const UploadResume = () => {
    const [file, setFile] = useState(null);

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("resume", file);

        try {
            const res = await axios.post("http://localhost:5001/api/resume/upload", formData);
            alert(res.data.message);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleUpload}>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
            <button type="submit">Upload</button>
        </form>
    );
};

export default UploadResume;
