/* eslint-disable react/prop-types */
import Job from './Job.jsx';
import { useState } from 'react';
function WorkExperience({
    jobsDataObject,
}) {
    const [ jobIds, setJobIds ] = useState(
        jobsDataObject.jobs.map(job => job.id)
    )
    // remove jobIdCounter state

    
    function handleAddJob() {
        const currentId = jobsDataObject.jobIdCounter + 1;
        
        const newJob = {
            id: currentId,
            name: "",
            title: "",
            responsibilities: "",
            startDate: "",
            endDate: "",
        }

        setJobIds([...jobIds, newJob.id])

        jobsDataObject.jobs = [ ...jobsDataObject.jobs, newJob ]
        jobsDataObject.jobIdCounter = currentId;
    }
    function handleRemoveJob(id) {
        setJobIds(jobIds.filter(currentId => currentId != id));
        jobsDataObject.jobs = jobsDataObject.jobs.filter(job => job.id != id);
    }

    return (
        <>
        <h3>Work Experience</h3>
        <ul className='jobs'>
            {jobsDataObject.jobs.map(job => {
                return (
                    <li key={job.id}>
                        <Job
                            jobObject={job}
                            handleRemoveJob={handleRemoveJob}
                        />
                    </li>
                )
            })}
        </ul>
        <button type="button" onClick={handleAddJob}>Add Job</button>
        </>
    )
}

export default WorkExperience;