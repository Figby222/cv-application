function School({
    id,
    name,
    field,
    dateOfStudy,
    handleSchoolChange
}) {
    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input 
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => handleSchoolChange({
                    id,
                    property: "name",
                    value: e.target.value
                })}
            />
            <label htmlFor="field">Field: </label>
            <input
                type="text"
                id="field"
                name="field"
                value={field}
                onChange={(e) => handleSchoolChange({
                    id,
                    property: "field",
                    value: e.target.value
                })}
            />
            <label htmlFor="dateOfStudy">Date: </label>
            <input
                type="date"
                id="dateOfStudy"
                name="dateOfStudy"
                value={dateOfStudy}
                onChange={(e) => handleSchoolChange({
                    id,
                    property: "dateOfStudy",
                    value: e.target.value
                })}
            />
        </div>
    )
}

export default School;