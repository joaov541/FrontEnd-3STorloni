// 09 ) Crie um componente chamado Jogo que receba:
// nome
// plataforma
// preco
// imagem
// Exiba todas as informações em formato de card.

import "./jogo.css"

const Jogo = ({nome, plataforma, preco, imagem}) => {
    return (
        <article className="Card-jogo">
            <span>Nome: {nome}</span>
            <span>Plataforma: {plataforma}</span>
            <span>Preço: {preco}</span>
            <img className="foto-jogo" src={imagem} alt="img" />
        </article>

    )
}

export default Jogo