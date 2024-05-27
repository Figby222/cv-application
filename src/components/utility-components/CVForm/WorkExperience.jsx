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
        </>
    )
}

export default WorkExperience;