import { useState } from 'react';
import Input from '../Input.jsx';

function ContactInfo({
    initialContactInfo,
}) {

    const [ contactInfo, setContactInfo ] = useState(initialContactInfo);

    const handleValueChange = (name, value) => {
        const newContactInfo = {...contactInfo};
        newContactInfo[name] = value;
        setContactInfo(newContactInfo);

        initialContactInfo[name] = value;
    }
    return (
        <>
            <h3>Contact Info</h3>
            <Input
                label="First Name: "
                type="text"
                id="first-name"
                name={"firstName"}
                placeholder="John"
                value={contactInfo.firstName}
                onChange={(e) => handleValueChange("firstName", e.target.value)}
            />
            <Input
                label="Last Name: "
                type="text"
                id="last-name"
                name="lastName"
                placeholder="Doe"
                value={contactInfo.lastName}
                onChange={(e) => handleValueChange("lastName", e.target.value)}
            />
        </>
    )
}

export default ContactInfo;