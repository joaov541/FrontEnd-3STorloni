
import "./App.css"
import ImagemJogo from "./assets/react.svg"
import ImagemAluno from"./assets/hero.png"
import Saudacao from "./componentes/exercicio01/saudacao"
import MyComponet from "./componentes/exercicio02/children/mycomponent";
import Produto from "./componentes/exercicio02/produto";
import Perfil from "./componentes/exercicio03/perfil";
import Botao from "./componentes/exercicio04/botao";
import Filme from "./componentes/exercicio05/filme";
import Aluno from "./componentes/exercicio06/aluno";
import Card from "./componentes/exercicio07/card";
import Contato from "./componentes/exercicio08/contato";
import Jogo from "./componentes/exercicio09/jogo";
import ItemLoja from "./componentes/exercicio10/itemLoja";

const App = () =>{

  //-------------PERFIL CARD----------------

  // const pessoas = [
  //   {
  //     id: 1,
  //     nome: "João Vitor",
  //     idade: 17,
  //     profissão: "Estudante"
  //   },

  //   {
  //     id: 2,
  //     nome: "Isis Souza",
  //     idade: 16,
  //     profissão: "Estudante"
  //   }

  // ]

  

   return(


    //-------------------PERFIL CARD----------------
  //   pessoas.map((p) =>{
  //     return <Perfil
  //             key={p.id}
  //             nome={p.nome}
  //             idade={p.idade}
  //             profissao={p.profissão}
  //             />
  //   })

    //--------------SAUDACAO--------------
    // <>
    //   {/* <Saudacao nome ="João"/>
    //   <Saudacao nome ="isis"/>
    //   <Saudacao nome ="Maria"/> */}


    //----------PRODUTO-----------//
    //   {/* <Produto nome = "Bola de Basquete" 
    //   preco={0.256784}
    //   descricao="Pãozinho quentinho, saiu direto do forno para a sua mesa!"
    //   /> */}
      
    
    // </>

    //-------------FILME----------------
    // <>
    // <Filme titulo="Carros 2" ano="2011" genero="Ação" nota="6,2"/>
    // </>
    
    //--------------BOTÃO------------
    // <>
    // <Botao cor="red" texto="Texto do Botão"/>
    // <Botao cor="green" texto="Texto do Botão"/>
    // </>""

    // //----------------ALUNO-------------
    // <>
    //   <Aluno nome="João" curso="Desenvolvimento de Sistemas" imagem={ImagemAluno}/>
    // </>
    

    //-----------------CARD-----------------
    // <>  
    // <Card>
    // <Botao cor="red" texto="Texto do Botão"/>
    //  <Botao cor="green" texto="Texto do Botão"/>
    // </Card>
    // </>


  //----------------CONTATO-------------
  // <>
  //  <Contato nome="João" telefone="11947748822" email="jns44nena@gmail"/>
  //  <Contato nome="Isis" telefone="11935323567" email="isiss@gmail"/>
  //  <Contato nome="Hugo" telefone="11986903483" email="huug@gmail"/>
  //  <Contato nome="Marcos" telefone="1193245689" email="Marcuuuss@gmail"/>
  //  <Contato nome="Gustavo" telefone="1191136543" email="guguAA@gmail"/>
  // </>


  // //---------------------JOGO CARD--------------------
  // <>
  //   <Jogo nome="GTA-V" plataforma="Console" preco="R$150,00" imagem={ImagemJogo}/>
  // </>

   //-----------------ITEM LOJA---------------------------
    // <>
    //   <ItemLoja nome="Camiseta" preco="R$67,00" categoria="esporte" estoque={2}/>
    // </>
""
 )
}

export default App;