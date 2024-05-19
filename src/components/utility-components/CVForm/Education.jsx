import { useState } from 'react';
import School from './School.jsx';

function Education({ 
    initialSchools, 
    initialSchoolIdCounter
}) {

    const [ schoolCount, setSchoolCount ] = useState(1);

    function handleAddSchool() {
        const currentId = schoolCount + 1;
        setSchoolCount(currentId);

        const newSchool = { id: currentId, name: "", field: "", dateOfStudy: "" };
        setSchools([...schools, newSchool]);
    }

    return (
        <>
            <h3>Education</h3>
            {initialSchools.map((school) => {
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