import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { Container } from "./styles";

interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
    label: string;
    children?: ReactNode;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
    ({ id, label, alt, children, error, ...rest }, ref) => {
    return (
        <Container>
            <div>
                <input alt={alt} id={id} ref={ref} placeholder=' ' {...rest} />
                <label htmlFor={id}>{label}</label>
                {children} 
            </div>
            { error && <p>{error}</p>}
        </Container>
    )
})