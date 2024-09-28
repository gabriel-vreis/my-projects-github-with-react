import './App.css';
import Header from './components/Header/Header';
import Saudacao from './components/Saudacao/Saudacao'; 
import Mensagem from './components/Mensagem/Mensagem';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Mensagem cor="red">
        Seja bem Vindo
      </Mensagem>
      <Footer/>
    </div>
  );
}

export default App;
