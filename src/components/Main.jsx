import CVForm from './CVForm/CVForm.jsx';
import CVDisplay from './CVDisplay.jsx';
import { useState } from 'react';
import '../styles/Main.css';

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

    function handleToggleEditing() {
        setEditing(!editing);
    }

    return (
        <>
            <main>
                {editing ? <CVForm resume={resume} handleFormSubmit={handleToggleEditing}/> : 
                    <CVDisplay resume={resume} handleSetEditing={handleToggleEditing}/>}
            </main>
        </>
    )
}

export default Main;