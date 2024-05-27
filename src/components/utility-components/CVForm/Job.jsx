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
                id={"job-title"}
                label="Job Title: "
                name="job-title"
                placeholder="Construction worker"
                value={jobObject.title}
                onChange={(e) => handleJobChange("title", e.target.value)}
           /> 
        </>
    )
}

export default Job;
