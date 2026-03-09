function calculaDesconto(){
    let precoOriginal = document.getElementById("preco-original").value;
    let percentualDesconto = document.getElementById("percentual-desconto").value;
    let resultadoTela = document.getElementById("resultado");
    let valorDesconto = 0;
    let precoFinal = 0;
    let resultado = "";
        
    if (precoOriginal > 0){
        if (percentualDesconto > 0 && percentualDesconto <=100){
        valorDesconto = precoOriginal * percentualDesconto / 100;

        precoFinal = precoOriginal - valorDesconto;
                
        resultado = `Preço Original: R$ ${precoOriginal} com desconto R$ ${percentualDesconto} fica R$ ${precoFinal}.`;

        console.log(resultado);
        alert(resultado);
        resultadoTela.innerHTML = resultado;
        }
        else{
            alert("Por favor, insira um valor de desconto válido!");
        }
    }
    else{
        alert("Digite o valor do Preço Original");
    }
}