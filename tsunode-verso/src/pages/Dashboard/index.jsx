import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Main } from "../../styles/Main";
import { Section } from "./styles";

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
            <Header />
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