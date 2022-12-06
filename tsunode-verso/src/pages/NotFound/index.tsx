import { Main } from "../../styles/Main";

import logoTsunodeVerso from '../../assets/tsunodeverso.svg';
import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <Main>
            <img src={logoTsunodeVerso} alt="Logo Tsunode Verso" />
            <h1>Página não encontrada</h1>
            <h2>404</h2>

            <Link to='/'>
                Ir para Login
            </Link>
        </Main>
    )
}