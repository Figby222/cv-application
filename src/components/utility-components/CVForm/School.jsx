import Input from '../Input.jsx';
import { useState } from 'react';

function School({
    schoolObject,
    handleRemoveSchool
}) {
    const [ school, setSchool ] = useState(schoolObject);

    function handleSchoolChange(property, value) {
        const newSchool = {...school}
        newSchool[property] = value;

        setSchool(newSchool);
        schoolObject[property] = value;
    }

    return (
        <>
            <Input 
                label="Name: "
                type="text"
                id="name"
                name="name"
                value={school.name}
                onChange={(e) => handleSchoolChange("name", e.target.value)}
            />
            <Input
                label="Field: "
                type="text"
                id="field"
                name="field"
                value={school.field}
                onChange={(e) => handleSchoolChange("field", e.target.value)}
            />
            <Input
                label="Date: "
                type="date"
                id="dateOfStudy"
                name="dateOfStudy"
                value={school.dateOfStudy}
                onChange={(e) => handleSchoolChange("dateOfStudy", e.target.value)}
            />
            <button 
                type="button"
                className="remove-school"
                onClick={() => handleRemoveSchool(school.id)}
            >Remove</button>
        </>
    )
}

export default School;