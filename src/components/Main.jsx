import CVForm from './utility-components/CVForm/CVForm.jsx';
import { useState } from 'react';

const resume = {
    contactInfo: {
        firstName: "",
        lastName: "",
        email: "",
    },
    schools: [
        { id: 1, name: "", field: "", dateOfStudy: ""}
    ],
    jobs: []
}

function Main() {
    const [ editing, setEditing ] = useState(true);
    return (
        <>
            <main>
                <CVForm />
            </main>
        </>
    )
}

export default Main;