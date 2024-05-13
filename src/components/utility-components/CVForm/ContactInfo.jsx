import { useState } from 'react';

function ContactInfo() {
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
        </>
    )
}

export default ContactInfo;