// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//     const [file, setFile] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const handleUpload = async () => {
//         if (!file) return alert("Please upload a resume!");

//         const formData = new FormData();
//         formData.append("resume", file);

//         try {
//             setLoading(true);
//             const response = await axios.post("http://localhost:5001/api/upload", formData);
//             localStorage.setItem("extractedData", JSON.stringify(response.data.extractedData));
//             navigate("/jobs"); // Redirect to jobs page
//         } catch (error) {
//             console.error("Upload error:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="container">
//             <h2>Upload Resume</h2>
//             <input type="file" onChange={handleFileChange} accept=".pdf,.docx" />
//             <button onClick={handleUpload} disabled={loading}>
//                 {loading ? "Uploading..." : "Upload & Find Jobs"}
//             </button>
//         </div>
//     );
// };

// export default Home;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Add error state
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setError(null); // Clear error when a new file is selected
    };

    const handleUpload = async () => {
        if (!file) {
            setError("Please upload a resume!");
            return;
        }

        const formData = new FormData();
        formData.append("resume", file);

        try {
            setLoading(true);
            const response = await axios.post("http://localhost:5001/api/upload", formData); // Corrected API endpoint
            localStorage.setItem("extractedData", JSON.stringify(response.data.data)); // Adjusted to match backend
            navigate("/jobs");
        } catch (error) {
            console.error("Upload error:", error);
            setError(error.response?.data?.error?.message || "An error occurred during upload."); // Display backend error
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="outer-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", width: "100vw", overflow: "auto" }}>
            <div className="inner-container" style={{ maxWidth: "500px", padding: "30px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#333" }}>Upload Resume</h2>
            <input type="file" onChange={handleFileChange} accept=".pdf,.docx" style={{
                        display: "block",
                        width: "100%",
                        padding: "10px",
                        marginBottom: "20px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                    }} />
            <button onClick={handleUpload} disabled={loading} style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        padding: "12px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: loading ? "not-allowed" : "pointer",
                        width: "100%",
                    }}>
                {loading ? "Uploading..." : "Upload & Find Jobs"}
            </button>
            {error && <p style={{ color: "red", marginTop: "15px", textAlign: "center" }}>{error}</p>} {/* Display error message */}
        </div></div>
    );
};

export default Home;