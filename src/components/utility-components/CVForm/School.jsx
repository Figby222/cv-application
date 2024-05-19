import Input from '../Input.jsx';
function School({
    schoolObject,
}) {
    return (
        <div className="school">
            <Input 
                label="Name: "
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
            <Input
                label="Field: "
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
            <Input
                label="Date: "
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