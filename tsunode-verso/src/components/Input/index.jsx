export function Input({ id, label, type, name, children }) {
    return (
        <>
            <label htmlFor={id} type={type}>{label}</label>
            <input type={type} name={name} id={id} />
        </>
    )
}