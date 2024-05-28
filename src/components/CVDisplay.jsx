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
        </>
    )
}

export default CVDisplay;