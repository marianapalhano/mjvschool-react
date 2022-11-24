import { Avatar } from "../Avatar";
import { Container } from "./styles";

import logoTsunodeVerso from "../../assets/tsunodeverso.svg";

export function Header() {
    return (
        <Container>
            <img src={logoTsunodeVerso} alt="Logo Tsunode Verso" />
            <form>
                <Input />
            </form>

            <div>
                <button>Novo Projeto</button>
                <Avatar />
            </div>
        </Container>
    )
}