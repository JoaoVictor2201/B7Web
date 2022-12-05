import { ReactNode } from "react";

type Props = {
    imgSubtitle : string;
    children : ReactNode; // ao invés de criar um prop para armazenar a url da imagem, utilize children pra poder colocar a propria tab de imagem no código
}

export const Photo = ( { imgSubtitle, children } : Props ) => {
    return ( // Retornando fragmentos de código sem estarem englobados por uma div
        <div>
            {children}
            <p>{imgSubtitle}</p>
        </div>
    );
}