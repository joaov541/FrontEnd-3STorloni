let frutasVermelhas = [];

frutasVermelhas.push("Morango");
frutasVermelhas.push("Maçã");
frutasVermelhas.push("Framboesa");
frutasVermelhas.push("Cereja");

console.log(frutasVermelhas);
let frutaRemovidaFist= frutasVermelhas.shift();//remove o primeiro item do array
console.log(`${frutaRemovidaFist} foi removido da cesta`);
console.log(frutasVermelhas);