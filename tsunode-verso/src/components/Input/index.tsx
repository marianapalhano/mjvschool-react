import { InputHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
    label: string;
    children?: ReactNode;
}

export function Input({ id, label, type, name, children, ...rest }: IInputProps) {
    return (
        <Container>
            <input type={type} name={name} id={id} placeholder=' ' />
            <label htmlFor={id}>{label}</label>
            {children}
        </Container>
    )
}