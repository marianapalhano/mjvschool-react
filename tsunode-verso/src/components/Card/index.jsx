import { useRef, useState } from "react";
import { GRID_SECTION_ROW_SIZE } from "../../pages/Dashboard/styles";
import { Container } from "./styles";
import { Avatar } from "../Avatar";

export function Card({ image }) {
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
            <div>
                <img
                    ref={imageRef}
                    onLoad={getImageSize}
                    src={image}
                    alt="" 
                />
                <p>Banco de dados do sistema financeiro do Banco do Brasil</p>
            </div>
            <div>
                <Avatar />
                <span>Mariana Palhano</span>
            </div>
        </Container>
    )
}