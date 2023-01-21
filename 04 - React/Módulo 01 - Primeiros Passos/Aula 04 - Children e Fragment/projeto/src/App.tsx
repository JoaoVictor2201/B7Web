import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Photo } from './components/Photo';
import { InnerText } from './components/InnerText';

const App = () => {

    return (
        <div>
            <Header title="Título exemplo"/>
            Olá Mundo
            <Photo imgSubtitle='imagem do google'>
                <img src="http://www.google.com.br/google.jpg" />
                <p>texto após a imagem</p>
                <InnerText texto='texto dentro do filho' />
            </Photo>
            <Footer />
        </div>
    );
}

export default App;