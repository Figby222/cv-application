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
            <Input
                label="Email: "
                type="email"
                id="email"
                name="email"
                placeholder="JohnDoe@yahoo.com"
                value={contactInfo.email}
                onChange={(e) => handleValueChange("email", e.target.value)}
            />
            <Input
                label="Phone Number: "
                type="tel"
                id="phone-number"
                name="phoneNumber"
                placeholder="(555) 555-5555"
                value={contactInfo.phoneNumber}
                onChange={(e) => handleValueChange("phoneNumber", e.target.value)}
            />
        </>
    )
}

export default ContactInfo;