const App = () => {
    // return (
    //     React.createElement('div', null, 'Meu nome é João')  // Criando um Componente utilizando React
    // );

    let name: string = "João" // Utilizando variáveis dentro do HTML
    let n1: number = 10;
    let n2: number = 20;
    let link: string = "https://google.com";

    function somar(n1: number, n2: number): number { // Utilizando Funções no HTML
        return n1 + n2;
    }

    return ( // Criando um componente de uma forma mais didática
        <div> 
            Meu nome é {name}<br/>
            A soma dos números é {somar(2, 5)}<br/>
            <a href={link}>Clique aqui para acessar</a>
        </div>
    );
}
export default App;