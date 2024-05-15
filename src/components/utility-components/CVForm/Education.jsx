import { useState } from 'react';

function School({
    id,
    name,
    field,
    dateOfStudy,
    handleSchoolChange
}) {
    return (
        <>
        <section className="school" id={id}>
            <Input 
                label="Name: "
                type="text"
                id="name"
                name="name"
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
            />
        </section>
        </>
    )
}

function Education() {

    const [ schools, setSchools ] = useState([{ id: 1, name: "", field: "", dateOfStudy: ""}]);
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