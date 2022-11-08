import { Card } from "../Card"

export function List() {
    const users = [
        {
            id: 1,
            lastname: 'Tsunoda',
            name: 'Gabriel',
            age: 24
        },
        {
            id: 2,
            lastname: 'Carvalho',
            name: 'Mateus',
            age: 22
        },
        {
            id: 3,
            lastname: 'Campos',
            name: 'Ravena',
            age: 26
        },
        {
            id: 4,
            lastname: 'Oliveira',
            name: 'Kimberly',
            age: 23
        }
    ]
    return (
        <ul>
            {
                users.map(user => 
                    <Card key={user.id} {...user} />
                )
            }
        </ul>
    )
}