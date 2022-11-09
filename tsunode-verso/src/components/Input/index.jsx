import { Container } from "./styles";

export function Input({ id, label, type, name, children }) {
    return (
        <Container>
            <input type={type} name={name} id={id} placeholder=' ' />
            <label htmlFor={id} type={type}>{label}</label>
            {children}
        </Container>
    )
}