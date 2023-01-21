type Props = {
    title : string; 
    conta? : number; // ? = Opcional
}

export const Header = ( {title, conta} : Props ) => {
    return (
        <header>
            <h1>{title}</h1>
            <p>{conta}</p>
            <hr />
        </header>
    );
}