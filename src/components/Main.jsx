import CVForm from './utility-components/CVForm/CVForm.jsx';
import CVDisplay from './CVDisplay.jsx';
import { useState } from 'react';

const resume = {
    contactInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
    },
    schoolsData: {
        schoolIdCounter: 1,
        schools: [
            { id: 1, name: "", field: "", dateOfStudy: ""}
        ],
    },
    jobsData: {
        jobIdCounter: 1,
        jobs: [
            { id: 1, companyName: "", title: "", responsibilities: "", startDate: "", endDate: "" }
        ],
    }
}

function Main() {
    const [ editing, setEditing ] = useState(true);
    return (
        <>
            <main>
                {editing ? <CVForm resume={resume}/> : <CVDisplay resume={resume}/>}
            </main>
        </>
    )
}

export default Main;