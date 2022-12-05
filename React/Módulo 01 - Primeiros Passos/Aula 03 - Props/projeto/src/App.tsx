import { Header } from './components/Header';
import { Footer } from './components/Footer'; // Chamando outros componentes

const App = () => {

    return ( // Propiedades dos componentes
        <div>
            <Header title="Título exemplo" conta={4 + 5} />
            <Header title="jfjdhfjksfkj" conta={14 + 5} />
            <Header title="Terceiro"></Header>
            Olá Mundo
            <Footer />
        </div>
    );
}

export default App;