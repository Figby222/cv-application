import { useState } from 'react';
import Input from '../Input.jsx';

function ContactInfo() {
    return (
        <>
            <h3>Contact Info</h3>
            <Input
                label="First Name: "
                type="text"
                id="first-name"
                name={"first-name"}
                placeholder="John"
            />
            <Input
                label="Last Name: "
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Doe"
            />
        </>
    )
}

export default ContactInfo;