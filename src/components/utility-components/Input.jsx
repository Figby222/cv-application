function Input({
    label,
    type,
    id,
    name,
    placeholder,
    value,
    onChange,
}) {
        return (
            <>
                <label htmlFor={id}>{label}</label>
                <input 
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value ? value : ""}
                    onChange={onChange}
                />
            </>
        )
}

export default Input;