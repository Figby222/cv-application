import { useState } from 'react';
import School from './School.jsx';

function Education({ 
    initialSchools, 
    initialSchoolIdCounter
}) {

    const [ schools, setSchools ] = useState(initialSchools);
    const [ schoolCount, setSchoolCount ] = useState(1);

    function handleSchoolChange({ id, property, value }) {
        const newSchools = [...schools];
        const index = newSchools.findIndex((school) => school.id === id);
        newSchools[index] = {...newSchools[index], [property]: value};

        setSchools(newSchools);
    }

    function handleAddSchool() {
        const currentId = schoolCount + 1;
        setSchoolCount(currentId);

        const newSchool = { id: currentId, name: "", field: "", dateOfStudy: "" };
        setSchools([...schools, newSchool]);
    }

    return (
        <>
            <h3>Education</h3>
            {schools.map((school) => {
                return <School
                    key={school.id}
                    id={school.id}
                    name={school.name}
                    field={school.field}
                    dateOfStudy={school.dateOfStudy}
                    handleSchoolChange={handleSchoolChange}
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