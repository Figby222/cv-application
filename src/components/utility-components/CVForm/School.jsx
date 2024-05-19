import Input from '../Input.jsx';
import { useState } from 'react';

function School({
    schoolObject,
}) {
    const [ school, setSchool ] = useState(schoolObject);
    
    return (
        <div className="school">
            <Input 
                label="Name: "
                type="text"
                id="name"
                name="name"
                value={school.name}
                onChange={(e) => handleSchoolChange({
                    id,
                    property: "name",
                    value: e.target.value
                })}
            />
            <Input
                label="Field: "
                type="text"
                id="field"
                name="field"
                value={school.field}
                onChange={(e) => handleSchoolChange({
                    id,
                    property: "field",
                    value: e.target.value
                })}
            />
            <Input
                label="Date: "
                type="date"
                id="dateOfStudy"
                name="dateOfStudy"
                value={school.dateOfStudy}
                onChange={(e) => handleSchoolChange({
                    id,
                    property: "dateOfStudy",
                    value: e.target.value
                })}
            />
        </div>
    )
}

export default School;