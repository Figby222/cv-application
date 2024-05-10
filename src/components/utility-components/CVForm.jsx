function CVForm({
    heading,
}) {
    return (
        <>
            <form method="post">
                <h2>{heading}</h2>
            </form>
        </>
    )
}

CVForm.defaultProps = {
    heading: "Create a CV"
}

export default CVForm;