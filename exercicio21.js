const carros = ["Fiesta", "Jeep", "Uno", "Kombi", "Brasília"]; //, "Del Rey", "Fusca", "Escort", "206", "Gol"];
let tamanhoVetor = carros.length;
let conteudo = document.getElementById("conteudo");

var dados = "";
var i = 0;
var finalizou = 0;

function criaSecao(dadosF, i){    
    if (!finalizou){
        let secao = document.createElement("div");   
        secao.innerHTML = `${dadosF}`;

        if(i < tamanhoVetor){
            secao.innerHTML += `Deseja ver mais um carro?`;
        }
        else {
            finalizou = 1;
            secao.innerHTML += `Finalizou.`;
        } 
     
        conteudo.appendChild(secao);
    }
}

function mostrarCarro(){    
    while (i < tamanhoVetor){
        dados = `<p><strong>${i+1} - ${carros[i]}</strong></p>`;
        i++;  
        break;
    }
    criaSecao(dados, i);

    dados = "";   
}

function resetCarro(){
   i = 0;
   finalizou = 0;
   conteudo.innerHTML = "";
   
}


