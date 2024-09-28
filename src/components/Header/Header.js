import './Header.css';
import Saudacao from '../Saudacao/Saudacao';

const Header = () => {
    return (
        <header className='header'>
            <h1>Meus Projetos do Github</h1>
            <Saudacao nome="Visitante"/>
        </header>
    )
}

export default Header;