import { children, useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { Navigate } from "react-router-dom";

//Componente de rotas privadas
const PrivateRoute = ({children}) =>{
    //recupera o state global do usuário (Vem do UsuarioProvider)
    const {usuario} = useContext(UsuarioContext)

    //Logado? renderiza o componente privado
    //Não logado? volta para a página inicial
    return usuario ? children : <Navigate to="/"/>
}

export default PrivateRoute