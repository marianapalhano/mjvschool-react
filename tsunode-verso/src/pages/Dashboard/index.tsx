import { FormEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
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
    const [hasNextPage, setHasNextPage] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const isFirstRender = useRef(true);

    useEffect(() => {
        const { CancelToken } = axios;
        const source = CancelToken.source();

        api.get<IProject[]>('/projects', {
            params: {
                page,
                pageSize: 5,
                q: searchParams.get('q')
            },
            cancelToken: source.token
        })
        .then((response) => {
            const { data } = response;

            if (page === 1) {
                setProjects(data)
            } else {
                setProjects((oldProjects) => [...oldProjects, ...data])
            }

            if (!data.length) {
                setHasNextPage(false);
            }
        })
        .catch(error => console.error(error))

        return () => {
            if (isFirstRender.current) {
                isFirstRender.current = false;
                return;
            }
            source.cancel();
        }
    }, [page, searchParams]);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSearchParams({
            q: searchInput
        });
        setPage(1);
        setHasNextPage(true);
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
                <InfiniteScroll
                    callback={() => setPage((oldPage) => oldPage + 1)}
                    hasNextPage={hasNextPage}
                />
            </Section>
        </main>
    )
}