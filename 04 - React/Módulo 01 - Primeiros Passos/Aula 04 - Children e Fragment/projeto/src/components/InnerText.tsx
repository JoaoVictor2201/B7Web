type Props = {
    texto : string;
}

export const InnerText = ( { texto } : Props ) => {
    return (
        <div>
            {texto}
        </div>
    );
}