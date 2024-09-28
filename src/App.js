import './App.css';
import Header from './components/Header/Header';
import Saudacao from './components/Saudacao/Saudacao';
import Mensagem from './components/Mensagem/Mensagem';
import Footer from './components/Footer/Footer';
import Projetos from './components/Projetos/Projetos';
import Form from './components/Form/Form';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Mensagem cor="red">
          Este projeto foi desenvolvido como forma de estudo e também foi necessário para a conclusão do Bootcamp de Desenvolvimento Front-end com React, oferecido pela iTalents.
        </Mensagem>
        <Projetos />
        <section className='contato'>
          <h1>Entre em Contato:</h1>
          <Form />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
