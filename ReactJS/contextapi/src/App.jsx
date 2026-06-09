import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import Perfil from './components/perfil/Perfil'
import Header from './components/header/header'
import Produto from './components/produto/Produto'
import CadastroProduto from './components/cadastroProduto/CadastroProduto'
import ListaProduto from './components/ListarProduto/ListarProduto'
import PrivateRoute from "./routes/PrivateRoute";
function App() {

  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      {/*Rotas Publicas*/}
      <Route path='/' element={<Home/> }/>
      <Route path='/perfil' element={<Perfil/> }/>

    {/*Rotas Privadas*/}
      <Route path='/produto'
       element={
        <PrivateRoute>
          <Produto/> 
        </PrivateRoute>
       }
       />

       {/*Rotas Privadas*/}
      <Route path='/cadproduto'
       element={
        <PrivateRoute>
           <CadastroProduto/>
        </PrivateRoute>
      }
      />

      {/*Rotas Privadas*/}
      <Route path='/listaproduto'
       element={
        <PrivateRoute>
          <ListaProduto/> 
        </PrivateRoute>
       }
       />

    </Routes>
   </BrowserRouter>
  )
}

export default App
