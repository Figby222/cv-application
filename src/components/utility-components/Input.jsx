function Input({
    label,
    type,
    id,
    name,
    placeholder
}) {
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

export default Input;