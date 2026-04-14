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
//////////////////////////////////////////////////////////////
    if (quantidadesErros > 0)
    {
        alert("Existem " + quantidadesErros + " erros no formulário!");
        return false;
    }
    else
    {        
        alert("Formulário enviado com sucesso!");
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

