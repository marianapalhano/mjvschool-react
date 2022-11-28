import styled, { css } from "styled-components";

// interface IButtonProps {
//     variant: 'primary' | 'error' | 'inline';
// }

const StyledButton = {
    primary: css` 
        background: var(--color-primary);
    `,
    error: css`
        background: var(--color-error);
    `,
    inline: css`
        background: none;
        color: var(--color-text);
        text-decoration: underline;
    `,
}

export const Button = styled.button`
    ${({ variant }) => StyledButton[variant]}
    border: none;
    min-height: 48px;
    padding: 0 15px;
    border-radius: 6px;
    font-weight: 500;
    width: 100%;
`;