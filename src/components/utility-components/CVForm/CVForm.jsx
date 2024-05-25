import { useState } from 'react';
import Education from './Education.jsx';
import ContactInfo from './ContactInfo.jsx';
import WorkExperience from './WorkExperience.jsx';


function CVForm({
    heading,
    resume,
}) {

    return (
        <>
            <form method="post">
                <h2>{heading}</h2>
                <fieldset className="contact-info">
                    <ContactInfo initialContactInfo={resume.contactInfo}/>
                </fieldset>
                <fieldset>
                    <Education 
                        schoolsDataObject={resume.schoolsData}
                    />
                </fieldset>
                <fieldset>
                    <WorkExperience jobsDataObject={resume.jobsData} />
                </fieldset>
            </form>
        </>
    )
}

CVForm.defaultProps = {
    heading: "Create a CV",
}

export default CVForm;