import Input from '../Input.jsx';

function Job({
    jobObject,
}) {
    function handleJobChange(property, value) {
        const newJobObject = {...jobObject}
        newJobObject[property] = value;
        jobObject = newJobObject;
    }
    return (
        <>
        </>
    )
}

export default Job;
