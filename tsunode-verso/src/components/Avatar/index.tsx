import { Container } from "./styles";
import avatar from "../../assets/avatars/marianapalhano.png";

export function Avatar() {
    return (
        <Container>
            <img src={avatar} alt="" />
        </Container>
    )
}