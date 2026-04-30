const estoque = [
    {
        descricao : "Camisa Polo",
        cor : "Verde",
        preco : 49.99,
        perfil : "M",
        quantidade : 10,
        promocao: false
    },

    {
        descricao : "Camisa Polo",
        cor : "Amerela",
        preco : 29.99,
        perfil : "F",
        quantidade : 15,
        promocao: true
    },

    {
        descricao : "Camisa Polo",
        cor : "Azul",
        preco : 29.99,
        perfil : "M",
        quantidade : 100,
        promocao: true
    },

    {
        descricao : "Camisa Polo",
        cor : "Roxa",
        preco : 49.99,
        perfil : "F",
        quantidade : 5,
        promocao: false
    },

];

//Retorne todas as camisetas do perfil feminino

// console.log("Camisetas femininas")
// CamisetasFemininas = estoque.filter((camisa)=>{
//     return camisa.perfil == "F";
// });

// console.log(CamisetasFemininas);
// console.log();

let qtdPromocao = 0;
console.log("Camisetas em promoção")

const Camisetaspromo = estoque.filter((p)=>{
    if (p.promocao == true) {
        qtdPromocao += p.quantidade;
    }
    return p.promocao == true;
});

console.log(`Quantidades de prdutos em promoção: ${qtdPromocao}`)

console.log(Camisetaspromo);