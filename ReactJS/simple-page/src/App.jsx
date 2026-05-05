import './App.css';


function App(){
  return(
    
   <nav className="menu">
        <a className="menu__item">Home</a>
        <a className="menu__item">Quem Somos</a>
        <a className="menu__item">Contato</a>
        <a className="menu__item menu__item--success">Entrar</a>
        <a classname="menu__item menu__item--button-default">Cadastrar</a>
        
        <div className="card-perfil">
            
            <img className="card-perfil__image"
             src="/bemcss/images/OIP (1).jpg" 
             alt="foto de perfil do usuário"/>
        </div>
    </nav>
  );
}

export default App;