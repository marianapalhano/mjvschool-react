import { Children, ReactNode } from "react";
import { Avatar } from "../Avatar";
import { Container } from "./styles";

import logoTsunodeVerso from "../../assets/tsunodeverso.svg";

interface IHeaderProps {
    children: ReactNode;
}

export function Header({ children }: IHeaderProps) {
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