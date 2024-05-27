import Job from './Job.jsx';
import { useState } from 'react';
function WorkExperience({
    jobsDataObject,
}) {
    const [ jobIdCounter, setJobIdCounter ] = useState(jobsDataObject.jobIdCounter);
    return (
        <>
        <h3>Work Experience</h3>
        </>
    )
}

export default WorkExperience;