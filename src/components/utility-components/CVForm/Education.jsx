import { useState } from 'react';

function School({
    id,
    name,
    field,
    dateOfStudy,
    handleSchoolChange
}) {
    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input 
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => handleSchoolChange({
                    id,
                    property: "name",
                    value: e.target.value
                })}
            />
            <label htmlFor="field">Field: </label>
            <input
                type="text"
                id="field"
                value={field}
                onChange={(e) => handleSchoolChange({
                    id,
                    property: "field",
                    value: e.target.value
                })}
            />
            <label htmlFor="dateOfStudy">Date: </label>
            <input
                type="date"
                id="dateOfStudy"
                name="dateOfStudy"
                value={dateOfStudy}
                onChange={(e) => handleSchoolChange({
                    id,
                    property: "dateOfStudy",
                    value: e.target.value
                })}
            />
        </div>
    )
}

function Education({ initialSchools }) {

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