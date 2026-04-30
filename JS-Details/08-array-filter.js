//utilizado para filtrar um elemento dentro de array. Retorna apenas o encontrado, veja:

// const numeros = [5, 10, 14, 50, 10, 900, 100, 10];

// const numeroEncontrado = numeros.filter((n) => {
    //     return n == 10;
    // });
    
    // console.log(numeroEncontrado);
    
const nomes = [
    "Walyson", 
    "Davi", 
    "Paulo", 
    "Edu", 
    "Laura",
    "Nathan", 
    "Lívia", 
    "Gabriel",
    "Gabriele", 
    "Amy", 
    "James", 
    "Marcos", 
    "Stephani",
    "Felipe", 
    "Fontes"
];

// PessoasLegais = nomes.filter((nome)=>{
//     return nome.length <= 3 || nome.length == 6;
// });
// console.log(PessoasLegais);


PessoasLetraN = nomes.filter((nome)=>{
    const primeiraLetra = nome.substring(0,1);
    return primeiraLetra == "N" || primeiraLetra == "L";
});
console.log(PessoasLetraN);