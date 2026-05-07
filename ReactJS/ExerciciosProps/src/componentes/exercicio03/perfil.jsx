// 03) Crie um componente chamado Perfil que receba:
// nome
// idade
// profissao
// O componente deve exibir os dados em formato de cartão.

import "./perfil.css"

const Perfil = ({nome, idade, profissao}) =>{
    return(
        <article className="card-perfil">
           <span>Nome: {nome}</span>
           <span>Idade: {idade}</span>
           <span>Promissão: {profissao}</span>
        </article>
    )
}
export default Perfil