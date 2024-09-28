import './Mensagem.css';

const Mensagem = ({cor, children}) => {
    return (
        <div className='mensagem'>
            <h1>Aviso: <span style={{color: cor}}>{children}</span></h1>
        </div>
    )
}

export default Mensagem;