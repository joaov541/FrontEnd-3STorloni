async function calcular() {
    event.preventDefault();
    //entrada
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let op = document.getElementById("operacao").value;//soma
    let resultado = null;

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById('resultado').innerText = 'Preencha todos os números!'
       
    }


    //processamento
    if (op == 'soma') {
        resultado = somar(n1, n2)
        resultado = resultado.toFixed(2);

    } else if (op == 'subtracao') {
        resultado = subtrair(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'multiplicacao') {
        resultado = multiplicar(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'divisao') {

        if (n2 == 0) {
            resultado = 'Não é um número';
        } else {
            resultado = dividir(n1, n2);
            resultado = resultado.toFixed(2);
        }

    } else {
        resultado = "Operação Inválida";
    }


    //objetos
    const objCalc = {
        numero1: n1,
        numero2: n2,
        op: op,
        result: resultado
    };

    const dadosGravados = await cadastrarNaAPI(objCalc);

    if (dadosGravados.error) {
        alert(dadosGravados.error);
        return;
    }

    document.getElementById('resultado').innerHTML = resultado;
    mostrarNoQuadro(objCalc)

    carregarCadastros();
}




async function cadastrarNaAPI(objCadastro) {
    try {
        const retorno = await fetch("http://localhost:3000/calculadora", {
            method: "POST",
            body: JSON.stringify(objCadastro),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const dados = await retorno.json();
        return dados;

    } catch (error) {
        console.log(error);
        return { error: "Erro ao cadastrar na API" };
    }
}

async function carregarCadastros() {
    try {
        const resposta = await fetch("http://localhost:3000/calculadora");
        const dados = await resposta.json();

        cadastro.innerHTML = "";

        dados.forEach(item => {
            mostrarNoQuadro(item);
        });

    } catch (error) {
        console.log("Erro ao buscar dados");
    }
}


//saída
// console.log(`Resultado da operação: ${resultado}`);





/**
 * Função somar recebe 2 valores e retorna a soma dos 
 * dois valores
 */
function somar(valor1, valor2) {
    return valor1 + valor2;
}


function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    if (valor2 == 0) {
        return 'Não é um número';
    }

    return valor1 / valor2;
}




function mostrarNoQuadro(objCadastro) {
    document.getElementById("cadastro").innerHTML += `
    
    <article class="data__card-result">
            <span><strong>Primeiro Número:</strong> ${objCadastro.numero1}</span>
            <span><strong>Segundo Número:</strong> ${objCadastro.numero2}</span>
            <span><strong>Operação:</strong> ${objCadastro.op}</span>
            <span><strong>Resultado:</strong> ${objCadastro.result}</span>
        </article>
    
    `
}


