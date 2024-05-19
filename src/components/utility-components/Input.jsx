function Input({
    label,
    type,
    id,
    name,
    placeholder,
    edit
}) {
    if (edit) {
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