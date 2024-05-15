import { useState } from 'react';
import Input from '../Input.jsx';

function School({
    id,
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
            <Input
                label="Field: "
                type="text"
                id="field"
                name="field"
            />
            <Input
                label="Date of study: "
                type="date"
                id="dateOfStudy"
                name="dateOfStudy"
            />
            <button
                type="button"
                className="remove-school"
                onClick={() => handleRemoveSchool(id)}
            >Remove</button>
        </section>
        </>
    )
}

function Education() {

    const [ schoolIds, setSchoolIds ] = useState([1]);
    const [ schoolCount, setSchoolCount ] = useState(1);


    function handleAddSchool() {
        const currentId = schoolCount + 1;
        setSchoolCount(currentId);
        setSchoolIds([...schoolIds, currentId])
        // console.log(schools);

        // const newSchool = { id: currentId, name: "", field: "", dateOfStudy: "" };
        // setSchools([...schools, newSchool]);
    }

    function handleRemoveSchool(targetId) {
        setSchoolIds(schoolIds.filter(id => id !== targetId));
    }

    return (
        <>
            <h3>Education</h3>
            {schoolIds.map((id) => {
                return <School
                    key={id}
                    id={id}
                    handleRemoveSchool={handleRemoveSchool}
                    // name={school.name}
                    // field={school.field}
                    // dateOfStudy={school.dateOfStudy}
                    // handleSchoolChange={handleSchoolChange}
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