// 06) Crie um componente chamado Aluno que receba:
// nome
// curso
// imagem
// Exiba:
// A imagem do aluno
// O nome
// O curso

import "./aluno.css"

const Aluno = ({nome, curso, imagem}) =>{
    return(
        <p>
            Nome: {nome} <br />
            Curso: {curso} <br />
            <img src={imagem} alt="nome" />
        </p>
    )
}

export default Aluno