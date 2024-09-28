import './Form.css';

const Form = () => {
    return (
        <form className='formularioContainer'>
            <div className='inputItem'>
                <label htmlFor=''>Nome:</label>
                <input type='text'></input>
            </div>
            <div className='inputItem'>
                <label htmlFor=''>Email:</label>
                <input type='text'></input>
            </div>
            <button>Enviar</button>
        </form>
    )
}

export default Form;