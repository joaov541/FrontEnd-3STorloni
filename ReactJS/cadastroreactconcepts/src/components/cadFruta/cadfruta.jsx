import { useState } from "react"
import "./cadfruta.css"

function CadFruta() {
    //states, funções e variáveris

    //state do formulário
    const [fruta, setFruta] = useState("")
    const [arrFrutas, setArrFrutas] = useState([
        {id: 1,nome: "Abacaxi", quantidade: 10},
        {id: 2,nome: "Mamão", quantidade: 20}
    ])

    const [quantidade, setQuantidade] = useState("")

    //Adicione mais um campo para cadastro de quantidade de frutas
    //Cadastre a fruta com a quantidade


    function Cadastrar(e) {
        e.preventDefault();//evita o submit do formulário
        setArrFrutas([...arrFrutas, {id: Date.now(), nome : fruta, quantidade : quantidade}])
        alert("Fruta Cadastrada com Sucesso!!")

        LimparFormulario()

        return false

    }

    //Limpar os states
    function LimparFormulario() {
        setFruta("")
        setQuantidade("")
    }

    return( 
        
    <section className="sessao-cadastro">
        <h1>Cadastro de Frutas</h1>
        <form action="" method="post" onSubmit={Cadastrar}>
        <fieldset className="linha">
          <label htmlFor="fruta" className="cadastro__rotulo">Digite o nome da fruta</label>
          <input 
                type="text" 
                id="fruta" 
                className="cadastro__entrada" 
                placeholder="Digite o nome da fruta"
                value={fruta}
                onChange={(e) => {
                    setFruta(e.target.value)

                }}  
          />
          <input 
             type="number" 
             className="cadastro__qtd"
             placeholder="Digite a quantidade" 
             value={quantidade}
             min={0}
             onChange={(e)=>{
                setQuantidade(e.target.value)
             }}
          />
          <button type="submit" className="cadastro__btn-cadastrar">Cadastrar</button>

          <br />
          <label htmlFor="">{fruta}</label>
        </fieldset>
        </form>

        <ul className="listagem">
            {
                arrFrutas.map((f) =>{
                    return (
                        <li key={f.id}>
                        Fruta: {f.nome} | Quantidade: {f.quantidade}
                    </li>
                    )
                })
            }
            
        </ul>
    </section>
    )
}

export default CadFruta