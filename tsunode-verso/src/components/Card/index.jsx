import { Container } from "./styles";

export function Card({ image }) {
    return (
        <Container>
            <img src={image} alt="" />
        </Container>
    )
}