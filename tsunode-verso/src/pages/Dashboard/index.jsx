import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Section } from "./styles";
import { Button } from "../../styles/Button";
import { Input } from "../../components/Input";
import { InfiniteScroll } from "../../components/InfiniteScroll";

export function Dashboard() {
    const [projects, setProjects] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {
        api.get('/projects', {
            params: {
                page,
                pageSize: 5,
                q: search
            }
        })
        .then((response) => {
            if (search && page === 1) {
                setProjects(response.data)
            } else {
                setProjects((oldProjects) => [...oldProjects, ...response.data])
            }
        })
        .catch(error => console.error(error))
    }, [page, search]);

    function handleSubmit(event) {
        event.preventDefault();
        setSearch(event.target.project.value);
        setProjects([]);
        setPage(1);
    }

    return (
        <main>
            <Header>
                <form onSubmit={handleSubmit}>
                    <Input 
                        label='Buscar projetos...' 
                        id='project'
                        name='project'
                        onChange={(event) => setProjects(event.target.value)}
                    />
                </form>
                <Button variant='primary'>Novo Projeto</Button>
            </Header>
            <Section>
                <ul>
                    {
                        projects.map(project =>
                            <Card 
                                key={project.id} 
                                {...project}
                            />
                        )
                    }
                </ul>
                {<InfiniteScroll callback={ () => setPage((oldPage) => oldPage + 1) } />}
            </Section>
        </main>
    )
}