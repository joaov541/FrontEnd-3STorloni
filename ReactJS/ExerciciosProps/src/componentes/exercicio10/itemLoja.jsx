// 10 ) Crie um componente chamado ItemLoja que receba:
// nome
// preco
// categoria
// estoque
// Regras:
// Se o estoque for maior que 0, mostrar: Produto disponível
// Caso contrário: Produto indisponível

import "./itemLoja.css"

const ItemLoja = ({nome, preco, categoria, estoque}) => {
   

    if (estoque > 0) {
      return(
      <p>
        Nome: {nome} <br />
        Preço: {preco} <br />
        Categoria: {categoria} <br />
        Estoque: {estoque} <br />
        situacao: produto disponível
    </p>
      )
    }
    else{
      return <p>
        Nome: {nome} <br />
        Preço: {preco} <br />
        Categoria: {categoria} <br />
        Estoque: {estoque} <br />
        situacao: produto indisponível
    </p>
    }
}

export default ItemLoja