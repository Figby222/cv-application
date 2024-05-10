function CVForm({
    heading,
}) {
    return (
        <>
            <form method="post">
                <h2>{heading}</h2>
                <fieldset className="contact-info">
                    <label>
                        First Name:&nbsp;
                        <input
                            type="text"
                            id="first-name"
                            name="first-name"
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
                </fieldset>
            </form>
        </>
    )
}

CVForm.defaultProps = {
    heading: "Create a CV"
}

export default CVForm;