 import "./cardperfil.css"
 import people from "../../assets/react.svg"
 function Cardperfil(params) {
    return(
       <div className="card-perfil">       
             <img className="card-perfil__image"
             src={people}
             alt="foto de perfil do usuário"/> 
        </div>
    );
 }
 
 export default Cardperfil;

 //ReactJs
 //Componentes
 //Podem receber os componentes e montar nossa interface
 //com os componentes reutilizáveis