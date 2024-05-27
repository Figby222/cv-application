import Input from '../Input.jsx';
import { useState } from 'react';

function Job({
    jobObject,
}) {

    const [ job, setJob ] = useState(jobObject);
    function handleJobChange(property, value) {
        const newJob = {...job}
        newJob[property] = value;

        jobObject[property] = value;
        setJob(newJob)
    }
    return (
        <>
            <Input 
                id="job-companyName"
                label="Company name: "
                type="text"
                name="job-companyName"
                placeholder="MicroSoft"
                value={jobObject.companyName}
                onChange={(e) => handleJobChange("companyName", e.target.value)}
            />
            <Input 
                    id={"job-title"}
                    label="Job Title: "
                    type="text"
                    name="job-title"
                    placeholder="Construction worker"
                    value={jobObject.title}
                    onChange={(e) => handleJobChange("title", e.target.value)}
            />
            <Input 
                id="job-responsibilities"
                label="Main responsibilities: "
                type="text"
                name="job-responsibilities"
                placeholder="Operating crane, heavy lifting"
                value={jobObject.responsibilities}
                onChange={(e) => handleJobChange("responsibilities", e.target.value)}
            />
            <Input 
                id="job-startDate"
                label="Start Date: "
                type="date"
                name="job-startDate"
                value={jobObject.startDate}
                onChange={(e) => handleJobChange("startDate", e.target.value)}
            />
        </>
    )
}

export default Job;
