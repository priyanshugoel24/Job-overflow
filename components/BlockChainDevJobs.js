import React from 'react'

var blockChainDevJobs = [];
const url = `http://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${process.env.ADZUNA_ID}&app_key=${process.env.ADZUNA_KEY}&results_per_page=20&what=blockchain%20developer&content-type=application/json`;

async function fetchJobs(){
    const res = await fetch(url);
    blockChainDevJobs = await res.json();
    console.log(blockChainDevJobs);
}

fetchJobs();

const BlockChainDevJobs = () => {
  return (
    <div>
        {blockChainDevJobs.results.map((job) => (
            <div key={job.id} className="job-card border rounded p-4 m-4">
            <h2 className="job-title text-xl font-bold">{job.title}</h2>
            <p className="company-name text-gray-600">{job.company.display_name}</p>
            <p className="location text-gray-500">{job.location.display_name}</p>
            <p className="salary text-gray-700">Salary: £{job.salary_min}</p>
            <p className="contract-time text-gray-500">Contract: {job.contract_time}</p>
            <p className="description">{job.description}</p>
            <a href={job.redirect_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Apply Now
            </a>
            </div>
        ))}
      
    </div>
  )
}

export default BlockChainDevJobs
