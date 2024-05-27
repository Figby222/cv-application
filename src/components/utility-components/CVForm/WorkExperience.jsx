import Job from './Job.jsx';
import { useState } from 'react';
function WorkExperience({
    jobsDataObject,
}) {
    const [ jobIdCounter, setJobIdCounter ] = useState(jobsDataObject.jobIdCounter);
    const [ jobIds, setJobIds ] = useState(
        jobsDataObject.jobs.map(job => job.id)
    )

    
    return (
        <>
        <h3>Work Experience</h3>
        {jobsDataObject.jobs.map(job => {
            return <Job 
                key={job.id}
                jobObject={job}
            />
        })}
        </>
    )
}

export default WorkExperience;