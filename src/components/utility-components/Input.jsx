function Input({
    label,
    type,
    id,
    name,
    placeholder,
    editing
}) {
    if (editing) {
        return (
            <>
                <label htmlFor={id}>{label}</label>
                <input 
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                />
            </>
        )
    }

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <p id={id}></p>
        </>
    )
}

export default Input;