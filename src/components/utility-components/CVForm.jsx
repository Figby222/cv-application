import { useState } from 'react';
function CVForm({
    heading,
}) {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    
    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    return (
        <>
            <form method="post">
                <h2>{heading}</h2>
                <fieldset className="contact-info">
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
            </form>
        </>
    )
}

CVForm.defaultProps = {
    heading: "Create a CV"
}

export default CVForm;