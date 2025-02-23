import React, { useEffect, useState } from "react";
import axios from "axios";

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5001/api/jobs?skills=React")
            .then(res => setJobs(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <ul>
            {jobs.map((job, index) => (
                <li key={index}>
                    <h3>{job.title}</h3>
                    <p>{job.company.display_name}</p>
                    <a href={job.redirect_url} target="_blank" rel="noopener noreferrer">Apply</a>
                </li>
            ))}
        </ul>
    );
};

export default JobList;
