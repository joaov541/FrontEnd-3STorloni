import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import Perfil from './components/perfil/Perfil'
import Header from './components/header/header'
import Produto from './components/produto/Produto'
import CadastroProduto from './components/cadastroProduto/CadastroProduto'
import ListaProduto from './components/ListarProduto/ListarProduto'

function App() {

  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path='/' element={<Home/> }/>
      <Route path='/perfil' element={<Perfil/> }/>
      <Route path='/produto' element={<Produto/> }/>
      <Route path='/cadproduto' element={<CadastroProduto/> }/>
      <Route path='/listaproduto' element={<ListaProduto/> }/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
