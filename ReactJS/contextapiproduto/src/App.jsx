import { useState } from 'react'
import './App.css'
import CadastroProduto from './components/CadastroProduto/CadastroProduto'
import ListaProduto from './components/ListarProduto/ListarProduto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CadastroProduto/>
     <ListaProduto/>
    </>
  )
}

export default App
