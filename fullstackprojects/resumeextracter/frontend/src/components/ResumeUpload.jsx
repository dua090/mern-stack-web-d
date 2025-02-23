import React, { useState } from "react";
import axios from "axios";

const ResumeUpload = ({ setSkills }) => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file!");
  
    const formData = new FormData();
    formData.append("resume", file);
  
    console.log("Uploading file:", file.name, "Size:", file.size);
  
    try {
      const response = await axios.post("http://localhost:6000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      console.log("Response Data:", response.data);
      setSkills(response.data.skills);
      setMessage("Resume uploaded and processed!");
    } catch (error) {
      console.error("Upload failed", error);
      setMessage("Error uploading resume.");
    }
  };
  

  return (
    <div>
      <h2>Upload Resume</h2>
      <input type="file" onChange={handleFileChange} accept=".pdf,.docx" />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
};

export default ResumeUpload;
