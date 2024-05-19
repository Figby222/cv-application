import { useState } from 'react';
import Input from '../Input.jsx';

function ContactInfo({
    initialContactInfo,
}) {
    return (
        <>
            <h3>Contact Info</h3>
            <Input
                label="First Name: "
                type="text"
                id="first-name"
                name={"firstName"}
                placeholder="John"
            />
            <Input
                label="Last Name: "
                type="text"
                id="last-name"
                name="lastName"
                placeholder="Doe"
            />
        </>
    )
}

export default ContactInfo;