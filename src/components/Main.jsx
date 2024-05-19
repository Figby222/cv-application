import CVForm from './utility-components/CVForm/CVForm.jsx';
import { useState } from 'react';

const application = {
    contactInfo: {
        firstName: "",
        lastName: "",
        email: "",
    },
    schools: [],
    jobs: []
}

function Main() {
    const [ editing, setEditing ] = useState(true);
    return (
        <>
            <main>
               <dialog open={true}>
                    <CVForm />
                </dialog> 
            </main>
        </>
    )
}

export default Main;