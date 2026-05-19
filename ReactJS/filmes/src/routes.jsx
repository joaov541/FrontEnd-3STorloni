import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CadastroFilme from "./pages/cadastroFilme/CadastroFilme";
import CadastroGenero from "./pages/cadastroGenero/Cadastro";
import Login from "./pages/login/login";

const Rotas = () => {
    return(
        <BrowserRouter>
            <nav>
                <Link to="/">Login</Link> {" | "}
                <Link to="/filme">Filmes</Link> {" | "}
                <Link to="/genero">Gêneros</Link> {" | "}
            </nav>
            <Routes>
                <Route element={<Login/>} path="/"/> 
                <Route element={<CadastroFilme/>} path="/filme"/> 
                <Route element={<CadastroGenero/>} path="/genero"/> 
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas