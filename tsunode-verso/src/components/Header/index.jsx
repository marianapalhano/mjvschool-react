import { Children } from "react";
import { Avatar } from "../Avatar";
import { Container } from "./styles";

import logoTsunodeVerso from "../../assets/tsunodeverso.svg";

export function Header({ children }) {
    const [SearchForm, NewProjectLink] = Children.toArray(children);
    return (
        <Container>
            <img src={logoTsunodeVerso} alt="Logo Tsunode Verso" />
            { SearchForm }
            <div>
                { NewProjectLink }
                <Avatar />
            </div>
        </Container>
    )
}