const listaDeCompras = ["Arroz", "Feijão", "Ovos"];

console.log(listaDeCompras);
listaDeCompras[3] = "Farofa";
console.log(listaDeCompras);

//esses 2 fazem a mesma coisa
listaDeCompras.push("Maça"); 
listaDeCompras[listaDeCompras.length] = "Maça2";

console.log(listaDeCompras);

console.log(`Há ${listaDeCompras.length} itens`);

console.log(listaDeCompras[listaDeCompras.length - 1]);

console.log("----------------------------------------------------");

const frutas = ["Laranja", "Maça", "Mamão", "Banana", "Pera"];
console.log(frutas);

console.log(`O terceiro ítem do array é ${frutas[2]}.`);

frutas[1] = "Melancia";
console.log(frutas);

frutas.push("Uva");
frutas.push("Abacate");
console.log(frutas);



