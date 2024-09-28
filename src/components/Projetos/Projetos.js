import './Projetos.css';
import microsoftImg from "../../images/microsoft.png";
import teatroImg from "../../images/arte-manha.png";
import calcImc from "../../images/imc-no-react.png";
import calcImcReact from "../../images/imc-no-react.png";

const Projetos = () => {
    const projetos = [
        {
            nome: 'Site da Microsoft',
            imagem: microsoftImg,
            descricao: 'Replica da homepage do site da microsoft com responsividade, feito como forma de estudo de HTML e CSS.',
            linkGit: 'https://github.com/gabriel-vreis/site-microsoft-homepage',
            linkGhPages: 'https://gabriel-vreis.github.io/site-microsoft-homepage/'
        },
        {
            nome: 'Site do Arte & Manha',
            imagem: teatroImg,
            descricao: 'Criando um site para um grupo de Teatro da minha cidade como forma de estudo de HTML e CSS. (Site em construção...).',
            linkGit: 'https://github.com/gabriel-vreis/site-arte-e-manha',
            linkGhPages: 'https://gabriel-vreis.github.io/site-arte-e-manha/'
        },
        {
            nome: 'Calculadora IMC',
            imagem: calcImc,
            descricao: 'Projeto feito com o intuito de concluir uma atividade do Bootcamp da iTalents que solicitava pelo menos 5 dos seguintes conceitos: Var, let e const, Arrow Function, Objetos, Classes, Arrays, Desestruturação, Template Literals, ES6 Modules, Operador Ternário, Spread Operator.',
            linkGit: 'https://github.com/gabriel-vreis/calculadora-imc',
            linkGhPages: 'https://gabriel-vreis.github.io/calculadora-imc/'
        },
        {
            nome: 'Calculadora IMC com REACT',
            imagem: calcImcReact,
            descricao: 'Projeto feito com o intuito de concluir uma atividade do Bootcamp iTalents que solicitava um projeto de estudo com REACT, fiz a adaptação da Calculadora IMC que está no meu repositório ultilizando o REACT.',
            linkGit: 'https://github.com/gabriel-vreis/calculadora-imc-with-react',
            linkGhPages: 'https://gabriel-vreis.github.io/calculadora-imc-with-react/'
        },
    ]

    return (
        <section className='sesaoProjetos'>
            <h1 className='meusProjetos'>Projetos</h1>
            <ul className='projetosContainer'>
                {projetos.map((projeto, index) => (
                    <li key={index} className='card'>

                        <img src={projeto.imagem} alt={`Imagem do projeto ${projeto.nome}`} />
                        <div className='conteudoCard'>
                            <h1>{projeto.nome}</h1>
                            <p>{projeto.descricao}</p>

                            <div className='botoes'>
                                <a href={projeto.linkGit} target='blank'>GitHub</a>
                                <a href={projeto.linkGhPages} target='blank'>GitHub Pages</a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Projetos;