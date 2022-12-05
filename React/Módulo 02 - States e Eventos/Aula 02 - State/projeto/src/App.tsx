import { useState } from 'react'

const App = () => {

    const [numero, setNumero] = useState(10);
    const [nome, setNome] = useState('João'); // Salva o conteúdo na memória até q seja alterado, sem alterar o restante das coisas

    const handleButtonClick = () => {
        setNome('Pedro');
        setNumero(20);
    }

    return (
        <div>
            Meu nome é {nome}<br />
            O número é {numero} <br />
            <button onClick={handleButtonClick}>Clique Aqui</button>
        </div>
    );
}

export default App;