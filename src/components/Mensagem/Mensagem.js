const Mensagem = ({cor, children}) => {
    return (
        <div>
            <h1>Mensagem do dia:</h1>
            <p style={{color: cor}}>{children}</p>
        </div>
    )
}

export default Mensagem;