import { useState } from 'react';
import School from './School.jsx';

function Education({ 
    initialSchools, 
    initialSchoolIdCounter
}) {

    const [ schools, setSchools ] = useState(initialSchools);
    const [ schoolIdCounter, setSchoolIdCounter ] = useState(initialSchoolIdCounter);

    function handleAddSchool() {
        const currentId = schoolIdCounter + 1;
        setSchoolIdCounter(currentId);
        
        initialSchoolIdCounter = currentId;

        const newSchool = { id: currentId, name: "", field: "", dateOfStudy: "" };
        setSchools([...schools, newSchool]);
    }

    return (
        <>
            <h3>Education</h3>
            {schools.map((school) => {
                return <School
                    key={school.id}
                    schoolObject={school}
                />
            })}
            <button 
                type="button" 
                className="add-school"
                onClick={handleAddSchool}>Add School</button>
        </>
    )
}

export default Education;