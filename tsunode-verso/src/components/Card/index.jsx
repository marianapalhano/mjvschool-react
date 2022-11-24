import { useRef, useState } from "react";
import { GRID_SECTION_ROW_SIZE } from "../../pages/Dashboard/styles";
import { Container } from "./styles";
import { Avatar } from "../Avatar";

export function Card({ thumbUrl, title, link, user }) {
    const imageRef = useRef();
    const [imageSize, setImageSize] = useState(0);

    function getImageSize() {
        if (!imageRef.current) {
            return;
        }
        const { height } = imageRef.current.height;
        const GRID_CONTENT_SPAN_SIZE = 4;
        setImageSize(Math.round(height / GRID_SECTION_ROW_SIZE) + GRID_CONTENT_SPAN_SIZE);
    }

    return (
        <Container size={imageSize}>
            <a href={link} target='_blank' rel='noreferrer'>
                <div>                
                    <img
                        ref={imageRef}
                        onLoad={getImageSize}
                        src={thumbUrl}
                        alt={title} 
                    />
                    <p>{title}</p>
                </div>
            </a>
            <div>            
                <Avatar />
                <span>{user.name} {user.surname}</span>
            </div>
        </Container>
    )
}