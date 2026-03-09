function criaSecao(titulo, dadosF){
    let secao = document.createElement("div");
    secao.innerHTML = `<h2>${titulo}</h2>${dadosF}`;
    conteudo.appendChild(secao);
}

const carros = ["Uno", "Fusca", "Escort", "Gol"];
let tamanhoVetor = carros.length;
const conteudo = document.getElementById("conteudo");

var dados = "";
var i = 0;


while (i < tamanhoVetor){
    dados += `<p>${carros[i]}</p>`;
    i++;
}

criaSecao("Loop While 1", dados);

// ---------------------------------------------------

dados = "";
i = tamanhoVetor - 1;

while (i >= 0){
    dados += `<p>${carros[i]}</p>`;
    i--;
}
criaSecao("Loop While 2", dados);

// ---------------------------------------------------
dados = "";
i = 0;

for (i = 0; i < tamanhoVetor; i++){
    dados += "<p>"+carros[i]+"</p>";
}
criaSecao("Loop For", dados);

// ---------------------------------------------------
dados = "";

for(let carro of carros){
    dados += "<p>"+carro+"</p>";
}

criaSecao("Loop For OF", dados);

// ---------------------------------------------------
dados = "";

for(let carro of carros){

     if (carro === "Fusca"){
        continue;
    }

    if (carro === "Escort"){
        break;
    }

    dados += "<p>"+carro+"</p>";
}

criaSecao("Loop For OF com parada (break) ou pulo (continue)", dados);
// ---------------------------------------------------

//Matriz
let carro1 = {marca:"Ford", modelo:"Ka", ano:"2015"};
let carro2 = {marca:"Fiat", modelo:"Uno", ano:"2000"};
let carro3 = {marca:"VW", modelo:"Gol", ano:"1999"};

let carros2 = [];
carros2.push(carro1);
carros2.push(carro2);

dados = "";

for (let carro of carros2){
    let propriedades = "";

    for (let prop in carro){
        propriedades += carro[prop] + " | ";
    }
    dados += "<p>"+propriedades+"</p>";
}

criaSecao("Loop For In", dados);

// ---------------------------------------------------
dados = "";

carros.forEach((carro) => {
     dados += "<p>"+carro+"</p>";
})

criaSecao("Loop ForEach", dados);
