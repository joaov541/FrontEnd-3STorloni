import Cardperfil from "../cardperfil/cardperfil";
import "./menu.css"

function Menu() {
    return(
        <nav className="menu">
        <a className="menu__item">Home</a>
        <a className="menu__item">Quem Somos</a>
        <a className="menu__item">Contato</a>
        <a className="menu__item menu__item--success">Entrar</a>
        <a className="menu__item menu__item--button-default">Cadastrar</a>
        
        <Cardperfil/>
    </nav>
    );
}

export default Menu;

