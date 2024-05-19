import { useState } from 'react';
import School from './School.jsx';

function Education({ 
    schoolsDataObject
}) {

    const [ schools, setSchools ] = useState(schoolsDataObject.schools);

    function handleAddSchool() {
        const currentId = schoolsDataObject.schoolIdCounter + 1;
        
        schoolsDataObject.schoolIdCounter = currentId;
        console.log(schoolsDataObject.schoolIdCounter)

        const newSchool = { id: currentId, name: "", field: "", dateOfStudy: "" };
        setSchools([...schools, newSchool]);

        schoolsDataObject.schools = [...schoolsDataObject.schools, newSchool];
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