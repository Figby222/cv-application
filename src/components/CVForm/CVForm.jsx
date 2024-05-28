import { useState } from 'react';
import Education from './Education.jsx';
import ContactInfo from './ContactInfo.jsx';
import WorkExperience from './WorkExperience.jsx';


function CVForm({
    heading,
    resume,
    handleFormSubmit,
}) {

    return (
        <>
            <form method="post" onSubmit={handleFormSubmit}>
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
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

CVForm.defaultProps = {
    heading: "Create a CV",
}

export default CVForm;