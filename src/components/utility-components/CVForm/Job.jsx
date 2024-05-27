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
        </>
    )
}

export default Job;
