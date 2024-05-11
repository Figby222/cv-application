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
                    property: "field",
                    value: e.target.value
                })}
            />
        </div>
    )
}

function CVForm({
    heading,
}) {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ schools, setSchools ] = useState([{ id: 1, name: "", field: "", dateOfStudy: ""}]);
    const [ schoolCount, setSchoolCount ] = useState(1);

    
    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handleSchoolChange({ id, property, value }) {
        const newSchools = [...schools];
        const index = newSchools.findIndex((school) => school.id = id);
        newSchools[index] = {...schools[index], [property]: value};

        setSchools(newSchools);
    }

    return (
        <>
            <form method="post">
                <h2>{heading}</h2>
                <fieldset className="contact-info">
                    <h3>Contact Info</h3>
                    <label>
                        First Name:&nbsp;
                        <input
                            type="text"
                            id="first-name"
                            name={"first-name"}
                            placeholder="John"
                            value={firstName}
                            onChange={handleFirstNameChange}
                        >
                        </input>
                    </label>
                    <label>
                        Last Name:&nbsp;
                        <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            placeholder="Doe"
                            value={lastName}
                            onChange={handleLastNameChange}
                        >
                        </input>
                    </label>
                </fieldset>
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
            </form>
        </>
    )
}

CVForm.defaultProps = {
    heading: "Create a CV"
}

export default CVForm;