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
        <section className="workExperience">
            <h3>Work Experience</h3>
            <ul className="jobs">
                {resume.jobsData.jobs.map(job => {
                    return (
                        <>
                        <li className="job">
                            <h4>{job.companyName}</h4>
                            <p className="job-title">
                                Job Title: {job.title}
                            </p>
                            <p className="job-responsibilities">
                                Main Responsibilities: {job.responsibilities}
                            </p>
                            <p className="job-startDate">
                                Start Date: {job.startDate}
                            </p>
                            <p className="job-endDate">
                                End Date: {job.endDate}
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