function verificaAprovacao(){
    let nota = document.getElementById("nota").value;
    let resultado = document.getElementById("resultado");

    console.log(`Nota inserida: ${nota}`);
    
    if (nota >= 6){
        resultado.innerHTML = "Aprovado";
    }
    else{
         resultado.innerHTML = "Reprovado";
    }
}