import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../services/api";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Section } from "./styles";
import { Button } from "../../styles/Button";
import { Input } from "../../components/Input";
import { InfiniteScroll } from "../../components/InfiniteScroll";

interface IUser {
    name: string;
    surname: string;
    title: string;
    avatar: string;
    avatarUrl: string;
}

export interface IProject {
    id: string
    title: string;
    description: string;
    link: string;
    adtionalLink: string;
    thumb: string;
    thumbUrl: string;
    user: IUser;
    createdAt: Date;
    updatedAt: Date;
    elapsedTime: string;
}

export function Dashboard() {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [page, setPage] = useState(1);
    const [searchInput, setSearchInput] = useState('');
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const { CancelToken } = axios;
        const source = CancelToken.source();

        api.get<IProject[]>('/projects', {
            params: {
                page,
                pageSize: 5,
                q: search
            },
            cancelToken: source.token
        })
        .then((response) => {
            if (search && page === 1) {
                setProjects(response.data)
            } else {
                setProjects((oldProjects) => [...oldProjects, ...response.data])
            }
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false))

        return () => {
            source.cancel();
        }
    }, [page]);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSearch(searchInput);
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
                        onChange={(event) => setSearchInput(event.target.value)}
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
                {<InfiniteScroll loading={loading} callback={ () => setPage((oldPage) => oldPage + 1) } />}
            </Section>
        </main>
    )
}