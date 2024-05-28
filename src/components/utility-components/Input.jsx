import '../../styles/Input.css';

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
                <div className="Input">
                    <label htmlFor={id}>{label}</label>
                    <input
                        type={type}
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        value={value ? value : ""}
                        onChange={onChange}
                        required={true}
                    />
                </div>
            </>
        )
}

export default Input;