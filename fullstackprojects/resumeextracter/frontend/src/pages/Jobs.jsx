// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Jobs = () => {
//     const [jobs, setJobs] = useState([]);
//     const extractedData = JSON.parse(localStorage.getItem("extractedData"));

//     useEffect(() => {
//         if (!extractedData) return;
        
//         const fetchJobs = async () => {
//             try {
//                 const response = await axios.get("https://api.adzuna.com/v1/api/jobs/in/search/1", {
//                     params: {
//                         app_id: fd3444a8,
//                         app_key: f8cd9882f46cffd7ba6e88ae8bbf3660,
//                         what: extractedData.key_skills.join(", "),
//                     }
//                 });
//                 setJobs(response.data.results);
//             } catch (error) {
//                 console.error("Error fetching jobs:", error);
//             }
//         };

//         fetchJobs();
//     }, []);

//     return (
//         <div className="container">
//             <h2>Relevant Job Listings</h2>
//             {jobs.length === 0 ? <p>Loading jobs...</p> : (
//                 <ul>
//                     {jobs.map((job) => (
//                         <li key={job.id}>
//                             <h3>{job.title}</h3>
//                             <p>{job.company.display_name} - {job.location.display_name}</p>
//                             <a href={job.redirect_url} target="_blank" rel="noopener noreferrer">
//                                 Apply Now
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default Jobs;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Jobs = () => {
//     const [jobs, setJobs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchJobsData = async () => {
//             try {
//                 const extractedData = JSON.parse(localStorage.getItem("extractedData"));

//                 if (!extractedData || !extractedData.skills || extractedData.skills.length === 0) {
//                     setError("No skills found in extracted data.");
//                     setLoading(false);
//                     return;
//                 }

//                 const skillsQuery = extractedData.skills.join(", "); // Join skills with commas

//                 const response = await axios.get(`http://localhost:5001/api/jobs`, {
//                     params: {
//                         skills: skillsQuery,
//                     },
//                 });

//                 setJobs(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Error fetching jobs:", err);
//                 setError(err.message || "Failed to fetch jobs.");
//                 setLoading(false);
//             }
//         };

//         fetchJobsData();
//     }, []);

//     if (loading) {
//         return <div>Loading jobs...</div>;
//     }

//     if (error) {
//         return <div style={{ color: "red" }}>Error: {error}</div>;
//     }

//     return (
//         <div className="jobs-container">
//             <h2>Job Listings</h2>
//             {jobs.length > 0 ? (
//                 <ul>
//                     {jobs.map((job) => (
//                         <li key={job.id}>
//                             <h3>{job.title}</h3>
//                             <p>Company: {job.company.display_name}</p>
//                             <p>Location: {job.location.display_name}</p>
//                             <p>Description: {job.description}</p>
//                             <a href={job.redirect_url} target="_blank" rel="noopener noreferrer">
//                                 Apply Now
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No jobs found.</p>
//             )}
//         </div>
//     );
// };

// export default Jobs;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Jobs = () => {
//     const [jobs, setJobs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchJobsData = async () => {
//             try {
//                 const extractedData = JSON.parse(localStorage.getItem("extractedData"));

//                 if (!extractedData || !extractedData.job_preferences || extractedData.job_preferences.length === 0) { // Changed to job_preferences
//                     setError("No job preferences found in extracted data.");
//                     setLoading(false);
//                     return;
//                 }

//                 const preferencesQuery = extractedData.job_preferences.join(", "); // Changed to job_preferences

//                 const response = await axios.get(`http://localhost:5001/api/jobs`, {
//                     params: {
//                         preferences: preferencesQuery, // Changed to preferences
//                     },
//                 });

//                 setJobs(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Error fetching jobs:", err);
//                 setError(err.message || "Failed to fetch jobs.");
//                 setLoading(false);
//             }
//         };

//         fetchJobsData();
//     }, []);

//     if (loading) {
//         return <div>Loading jobs...</div>;
//     }

//     if (error) {
//         return <div style={{ color: "red" }}>Error: {error}</div>;
//     }

//     return (
//         <div className="jobs-container">
//             <h2>Job Listings</h2>
//             {jobs.length > 0 ? (
//                 <ul>
//                     {jobs.map((job) => (
//                         <li key={job.id}>
//                             <h3>{job.title}</h3>
//                             <p>Company: {job.company.display_name}</p>
//                             <p>Location: {job.location.display_name}</p>
//                             <p>Description: {job.description}</p>
//                             <a href={job.redirect_url} target="_blank" rel="noopener noreferrer">
//                                 Apply Now
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No jobs found.</p>
//             )}
//         </div>
//     );
// };

// export default Jobs;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Jobs = () => {
//     // ... (rest of your component)

//     useEffect(() => {
//         const fetchJobsData = async () => {
//             try {
//                 const extractedData = JSON.parse(localStorage.getItem("extractedData"));
//                 console.log("Jobs.js: Extracted Data from localStorage:", extractedData);

//                 if (!extractedData) {
//                     setError("No extracted data found.");
//                     setLoading(false);
//                     return;
//                 }

//                 if (!extractedData.job_preferences) {
//                     console.log("Jobs.js: job_preferences property missing:", extractedData);
//                     setError("job_preferences property missing.");
//                     setLoading(false);
//                     return;
//                 }

//                 if (extractedData.job_preferences.length === 0) {
//                     console.log("Jobs.js: job_preferences array is empty:", extractedData);
//                     setError("No job preferences found in extracted data.");
//                     setLoading(false);
//                     return;
//                 }

//                 const preferencesQuery = extractedData.job_preferences.join(", ");
//                 console.log("Jobs.js: Preferences Query:", preferencesQuery);

//                 const response = await axios.get(`http://localhost:5001/api/jobs`, {
//                     params: {
//                         preferences: preferencesQuery,
//                     },
//                 });

//                 setJobs(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Jobs.js: Error fetching jobs:", err);
//                 setError(err.message || "Failed to fetch jobs.");
//                 setLoading(false);
//             }
//         };

//         fetchJobsData();
//     }, []);

//     // ... (rest of your component)
// };

// export default Jobs;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Correctly defined setError

    useEffect(() => {
        const fetchJobsData = async () => {
            try {
                const extractedData = JSON.parse(localStorage.getItem("extractedData"));
                console.log("Jobs.js: Extracted Data from localStorage:", extractedData);

                if (!extractedData || !extractedData.extractedData || !extractedData.extractedData.job_preferences || extractedData.extractedData.job_preferences.length === 0) { // Corrected access
                    if(!extractedData){
                        setError("No extracted data found.");
                    } else if (!extractedData.extractedData){
                        setError("extractedData.extractedData is missing");
                    } else if (!extractedData.extractedData.job_preferences){
                        setError("job_preferences property missing.");
                    } else if (extractedData.extractedData.job_preferences.length === 0){
                        setError("No job preferences found in extracted data.");
                    }
                    setLoading(false);
                    return;
                }

                const preferencesQuery = extractedData.extractedData.job_preferences.join(", "); // Corrected access
                console.log("Jobs.js: Preferences Query:", preferencesQuery);

                const response = await axios.get(`https://mern-stack-web-d.onrender.com/api/jobs`, {
                    params: {
                        preferences: preferencesQuery,
                    },
                });

                setJobs(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Jobs.js: Error fetching jobs:", err);
                setError(err.message || "Failed to fetch jobs.");
                setLoading(false);
            }
        };

        fetchJobsData();
    }, []);

    if (loading) {
        return <div style={{ textAlign: "center", marginTop: "50px" }}>Loading jobs...</div>;
    }

    if (error) {
        return <div style={{ color: "red", textAlign: "center", marginTop: "50px" }}>Error: {error}</div>;
    }

    return (
        <div className="outer-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", width: "100vw", overflow: "auto" }}>
        <div className="jobs-container" style={{ maxWidth: "1024px", margin: "50px auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>Job Listings </h2>
            {jobs.length > 0 ? (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {jobs.map((job) => (
                        <li key={job.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", marginBottom: "20px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                            <h3 style={{ color: "#007bff", marginBottom: "10px" }}>{job.title}</h3>
                            <p style={{ marginBottom: "5px" }}><strong>Company:</strong> {job.company.display_name}</p>
                            <p style={{ marginBottom: "5px" }}><strong>Location:</strong> {job.location.display_name}</p>
                            <p style={{ marginBottom: "15px" }}><strong>Description:</strong> {job.description.substring(0, 200)}...</p> {/* Shortened description */}
                            <a
                                href={job.redirect_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    backgroundColor: "#007bff",
                                    color: "white",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                    textDecoration: "none",
                                    display: "inline-block",
                                }}
                            >
                                Apply Now
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ textAlign: "center", color: "#777" }}>No jobs found.</p>
            )}
        </div></div>
    );
};

export default Jobs;
