import { Container } from "./styles";
import avatar from "../../assets/avatars/marianapalhano.png";
import { IAvatarProps } from "./types";

export function Avatar({ size }: IAvatarProps) {
    return (
        <Container size={size}>
            <img src={avatar} alt="" />
        </Container>
    )
}