// Esta função recebe os dados do formulário de um objeto JavaScript e em seguida chama a API para cadastrar
async function cadastrarContato(objetoContato){
    console.log(objetoContato);

    //chamar a api com o fetch
  const resposta = await fetch("http://localhost:3000/contatos", {
        method : "POST",
        body: JSON.stringify(objetoContato),//converte o objeto javascript em json 
        headers: {//Informa para a API que o body está sendo enviado no formato json
            "Const-Type": "application/json; charset=UTF-8"
        }
    });
}





async function buscarEndereco(cep){

    // quando o cep não vier preenchido
    if(cep.trim().length < 8){
        alert("O CEP deve ter 8 números");
        return false;
    }

    //buscar o CEP lá no ViaCEP
    try {

        aguardandoCampos();
        //get
        let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let dados = await retorno.json();
        // console.log(dados);
        // console.log(dados.logradouro);
        // console.log(dados.bairro);
        // console.log(dados.localidade);
        // console.log(dados.estado);
        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("Bairro").value = dados.bairro;
        document.getElementById("Cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.estado;
        
    }
    catch(error){
        console.log(error);
    }

    }
function aguardandoCampos(){
    document.getElementById("rua").value = "aguarde...";
    document.getElementById("Bairro").value = "aguarde...";
    document.getElementById("Cidade").value = "aguarde...";
    document.getElementById("estado").value = "aguarde...";
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////

function validarFormulario() 
{
    let quantidadesErros = 0;

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let pais = document.getElementById("pais").value;
    let ddd = document.getElementById("ddd").value;
    let telefone = document.getElementById("telefone").value;
    let cep = document.getElementById("cep").value;
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numeroCasa").value;
    let complemento = document.getElementById("Complemento").value;
    let bairro = document.getElementById("Bairro").value;
    let cidade = document.getElementById("Cidade").value;
    let estado = document.getElementById("estado").value;
    let anotações = document.getElementById("anotações").value;

    if (nome.trim().length == 0) {
        formError("nome");
        quantidadesErros++;
    } else {
        ReiniciaBordas("nome");
    }
//////////////////////////////////////////////////////////////
    if (sobrenome.trim().length == 0) {
        formError("sobrenome");
        quantidadesErros++;
    } else {
        ReiniciaBordas("sobrenome");
    }
////////////////////////////////////////////////////////////// 
    if (email.trim().length == 0) {
        formError("email");
        quantidadesErros++;
    } else {
        ReiniciaBordas("email");
    }
////////////////////////////////////////////////////////////// 
    if (pais.trim().length == 0) {
        formError("pais");
        quantidadesErros++;
    } else {
        ReiniciaBordas("pais");
    }
////////////////////////////////////////////////////////////// 
    if (ddd.trim().length == 0) {
        formError("ddd");
        quantidadesErros++;
    } else {
        ReiniciaBordas("ddd");
    }
////////////////////////////////////////////////////////////// 
    if (telefone.trim().length == 0) {
        formError("telefone");
        quantidadesErros++;
    } else {
        ReiniciaBordas("telefone");
    }
////////////////////////////////////////////////////////////// 
    if (cep.trim().length == 0) {
        formError("cep");
        quantidadesErros++;
    } else {
        ReiniciaBordas("cep");
    }
////////////////////////////////////////////////////////////// 
    if (rua.trim().length == 0) {
        formError("rua");
        quantidadesErros++;
    } else {
        ReiniciaBordas("rua");
    }
////////////////////////////////////////////////////////////// 
    if (numero.trim().length == 0) {
        formError("numeroCasa");
        quantidadesErros++;
    } else {
        ReiniciaBordas("numeroCasa");
    }
////////////////////////////////////////////////////////////// 
    if (complemento.trim().length == 0) {
        formError("Complemento");
        quantidadesErros++;
    } else {
        ReiniciaBordas("Complemento");
    }
////////////////////////////////////////////////////////////// 
    if (bairro.trim().length == 0) {
        formError("Bairro");
        quantidadesErros++;
    } else {
        ReiniciaBordas("Bairro");
    }
////////////////////////////////////////////////////////////// 
    if (cidade.trim().length == 0) {
        formError("Cidade");
        quantidadesErros++;
    } else {
        ReiniciaBordas("Cidade");
    }
////////////////////////////////////////////////////////////// 
    if (estado.trim().length == 0) {
        formError("estado");
        quantidadesErros++;
    } else {
        ReiniciaBordas("estado");
    }
////////////////////////////////////////////////////////////// 
    if (anotações.trim().length == 0) {
        formError("anotações");
        quantidadesErros++;
    } else {
        ReiniciaBordas("anotações");
    }
// //////////////////////////////////////////////////////////////
   
// hora de cadastrar
if (quantidadesErros > 0)
    {
        alert("Existem " + quantidadesErros + " erros no formulário!");
        quantidadesErros = 0; //reinicia a contagem
        return false;
    }
    else
    {        
        alert("Formulário enviado com sucesso")
        //gera um objeto com os dados do formulário
        let objetoContato = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            telefone: `${pais}${ddd}${telefone}`,
            cep: cep,
            rua: rua,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            anotações: anotações
            
        }
        let cadastrado = cadastrarContato(objetoContato);
       
        reiniciaTodasAsBordas();
        return true;
    }
}

function formError(idCampo){
    document.getElementById(idCampo).style.border = "2px solid red";
}

function ReiniciaBordas(idCampo){
    document.getElementById(idCampo).style.border = "";
}

function reiniciaTodasAsBordas(){
    let campos = document.querySelectorAll("input, textarea");

    campos.forEach(function(campo){
        campo.style.border = "";
    });
}

