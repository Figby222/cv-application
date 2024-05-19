import { useState } from 'react';
import Education from './Education.jsx';
import ContactInfo from './ContactInfo.jsx';


function CVForm({
    heading,
    resume,
}) {

    return (
        <>
            <form method="post">
                <h2>{heading}</h2>
                <fieldset className="contact-info">
                    <ContactInfo />
                </fieldset>
                <fieldset>
                    <Education initialSchools={} />
                </fieldset>
            </form>
        </>
    )
}

CVForm.defaultProps = {
    heading: "Create a CV",
}

export default CVForm;