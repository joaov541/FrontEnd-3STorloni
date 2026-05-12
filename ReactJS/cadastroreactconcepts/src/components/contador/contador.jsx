import { useState } from "react"
import "./contador.css"

const Contador = () => {

    const [valor, setValor] = useState(0)

    
    function Incremento() {
        setValor(valor + 1)

        //toda vez que o contador chegar em 10 você deve reiniciar
        if (valor >= 10) {
            setValor(0)
        }
    }

    
    //criar uma função decremento()
    function Decremento() {
        setValor(valor - 1)

        //o contador não pode fazer contagem negativa
        if (valor <= 0) {
            setValor(0)
        }
    }

    

    
    return(
        <>
        <p>Contagem: {valor}</p>
        <button onClick={Incremento}>++</button>
        <button onClick={Decremento}>--</button>
        </>


)

}

export default Contador