import { useState } from 'react';

function ContactInfo() {
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
                >
                </input>
            </label>
        </>
    )
}

export default ContactInfo;