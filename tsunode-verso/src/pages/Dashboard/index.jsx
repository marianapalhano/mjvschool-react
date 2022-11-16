import { Card } from "../../components/Card";
import { Section } from "./styles";

import image3 from "../../assets/image3.png";
import image5 from "../../assets/image5.png";

export function Dashboard() {
    return (
        <Section>
            <ul>
                <Card image={image3} />
                <Card image={image5} />
                <Card image={image5} />
                <Card image={image3} />
                <Card image={image3} />
                <Card image={image5} />
                <Card image={image3} />
                <Card image={image3} />
            </ul>
        </Section>
    )
}