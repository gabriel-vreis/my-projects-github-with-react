import './Saudacao.css';
const Saudacao = ({nome}) => {
    return (
        <h1 className='mensagemSaudacao'>Olá <span>{nome}</span>, seja bem vindo.</h1>
    )
}

export default Saudacao;