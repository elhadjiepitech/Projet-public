import React, { useState } from "react";
import "./joblist.css";

function JobList() {
    const cities = ["Haguenau", "Strasbourg", "Illkirch", "Oswalt", "Robertsau", "Chiltgheim", "Chronumbourg"];
    const jobs = [
        {
            id: 1,
            title: "Développeur Front-End",
            description: "Nous recherchons un développeur Front-End pour rejoindre notre équipe.",
            location: cities[Math.floor(Math.random() * cities.length)],
        },
        {
            id: 2,
            title: "Développeur Back-End",
            description: "Nous recherchons un développeur Back-End pour rejoindre notre équipe.",
            location: cities[Math.floor(Math.random() * cities.length)],
        },
        {
            id: 3,
            title: "Designer UX/UI",
            description: "Nous recherchons un designer UX/UI pour rejoindre notre équipe.",
            location: cities[Math.floor(Math.random() * cities.length)],
        },
        {
            id: 4,
            title: "Chef de projet",
            description: "Nous recherchons un chef de projet pour rejoindre notre équipe.",
            location: cities[Math.floor(Math.random() * cities.length)],
        },
        {
            id: 5,
            title: "Développeur Full-Stack",
            description: "Nous recherchons un développeur Full-Stack pour rejoindre notre équipe.",
            location: cities[Math.floor(Math.random() * cities.length)],
        },
        {
            id: 6,
            title: "Analyste de données",
            description: "Nous recherchons un analyste de données pour rejoindre notre équipe.",
            location: cities[Math.floor(Math.random() * cities.length)],
        },
        {
            id: 7,
            title: "Ingénieur DevOps",
            description: "Nous recherchons un ingénieur DevOps pour rejoindre notre équipe.",
            location: cities[Math.floor(Math.random() * cities.length)],
        },
        {
            id: 8,
            title: "Développeur Mobile",
            description: "Nous recherchons un développeur Mobile pour rejoindre notre équipe.",
            location: cities[Math.floor(Math.random() * cities.length)],
        },
        {
            id: 9,
            title: "Administrateur système",
            description: "Nous recherchons un administrateur système pour rejoindre notre équipe.",
            location: cities[Math.floor(Math.random() * cities.length)],
        },
        {
            id: 10,
            title: "Développeur Java",
            description: "Nous recherchons un développeur Java pour rejoindre notre équipe.",
            location: cities[Math.floor(Math.random() * cities.length)],
        },
    ];

    const [expandedJobs, setExpandedJobs] = useState([]);

    const handleExpand = (jobId) => {
        if (expandedJobs.includes(jobId)) {
            setExpandedJobs(expandedJobs.filter((id) => id !== jobId));
        } else {
            setExpandedJobs([...expandedJobs, jobId]);
        }
    };

    return (
        <div>
            <h1>Liste des emplois</h1>
            {jobs.map((job) => (
                <div key={job.id} className="job">
                    <div className="job-header">
                        <h2>{job.title}</h2>
                        <button className="expand-button" onClick={() => handleExpand(job.id)}>
                            {expandedJobs.includes(job.id) ? "hide" : "more"}
                        </button>
                    </div>
                    <div className={`job-description ${expandedJobs.includes(job.id) ? "expanded" : ""}`}>
                        <p>{job.description}</p>
                        <p>{job.location}</p>
                    </div>
                </div>
            ))}
        </div>

        
    );
}

export default JobList;