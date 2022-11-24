import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Main } from "../../styles/Main";
import { Section } from "./styles";
import { Button } from "../../styles/Button";

export function Dashboard() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects', {
            page: 1,
            pageSize: 20
        })
        .then((response) => setProjects(response.data))
        .catch(error => console.error(error))
    }, [])

    return (
        <Main>
            <Header>
                <form>
                    <Input label='Buscar projetos...' id='project' name='project' />
                </form>
                <Button variant='primary'>Novo Projeto</Button>
            </Header>
            <Section>
                <ul>
                    {   projects.map(project => {
                            <Card key={project.id} {...project} />
                        })                    
                    }
                </ul>
            </Section>
        </Main>
    )
}