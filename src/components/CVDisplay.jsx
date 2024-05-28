function CVDisplay({
    resume,
}) {
    return (
        <>
        <h2>Curriculum Vitae</h2>
        <section className="contactInfo">
            <h3>Contact Info</h3>
            <p className="name">
                Name: { resume.contactInfo.firstName + " " + resume.contactInfo.lastName }
            </p>
            <p className="email">
                Email: {resume.contactInfo.email}
            </p>
            <p className="phoneNumber">
                Phone: {resume.contactInfo.phoneNumber}
            </p>
        </section>
        <section className="education">
            <h3>Education</h3>
            <ul className="schools">
                {resume.schoolsData.schools.map(school => {
                    return (
                        <>
                        <li className="school">
                            <h4>{school.name}</h4>
                            <p className="school-field">
                                Field: {school.field}
                            </p>
                            <p className="school-dateOfStudy">
                                Date of Study: {school.dateOfStudy}
                            </p>
                        </li>
                        </>
                    )
                })}
            </ul>
        </section>
        </>
    )
}

export default CVDisplay;