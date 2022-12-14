import styled from "styled-components";

interface IStepProps {
    step: number;
}

export const Steps = styled.div<IStepProps>`
    display: flex;
    justify-content: center;
    div {
        width: 12px;
        height: 12px;
        background-color: #fff;
        margin: 5px;
        border-radius: 50%;
    }
    div:nth-child(${({step}) => step}) {
        background-color: var(--color-primary);
    }
`