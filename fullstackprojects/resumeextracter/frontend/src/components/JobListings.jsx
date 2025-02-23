import React, { useEffect, useState } from "react";
import axios from "axios";

const JobListings = ({ skills }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:6000/jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };
    fetchJobs();
  }, [skills]);

  return (
    <div>
      <h2>Relevant Job Listings</h2>
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <strong>{job.title}</strong> at {job.company} - {job.location}
              <br />
              <a href={job.link} target="_blank" rel="noopener noreferrer">
                Apply Here
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobListings;
