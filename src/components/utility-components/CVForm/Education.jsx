import { useState } from 'react';
import School from './School.jsx';

function Education({ 
    schoolsDataObject
}) {

    const [ schoolIds, setSchoolIds ] = useState(
        schoolsDataObject.schools.filter(school => school.id)
    );

    function handleAddSchool() {
        const currentId = schoolsDataObject.schoolIdCounter + 1;
        const newSchool = { id: currentId, name: "", field: "", dateOfStudy: "" };

        setSchoolIds([ ...schoolIds, newSchool.id ])
        
        schoolsDataObject.schools = [...schoolsDataObject.schools, newSchool];
        schoolsDataObject.schoolIdCounter = currentId;
    }

    function handleRemoveSchool(id) {
        setSchoolIds(schoolIds.filter(currentId => currentId !== id));
        schoolsDataObject.schools = schoolsDataObject.schools
            .filter(school => school.id !== id)
    }

    return (
        <>
            <h3>Education</h3>
            {schoolsDataObject.schools.map((school) => {
                return <School
                    key={school.id}
                    schoolObject={school}
                    handleRemoveSchool={handleRemoveSchool}
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