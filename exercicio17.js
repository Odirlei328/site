function executaOperacao(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;
    let resultado = document.getElementById("resultado");
    let resCalc = 0;

    if (!isNaN(num1) && !isNaN(num2)){
        //validando operador
        switch(operador){
            case "+":
                resCalc = num1 + num2;
                break;
            case "-":
                resCalc = num1 - num2;
                break;
            case "*":
                resCalc = num1 * num2;
                break;
            case "/":
                if (num2 > 0){
                    resCalc = num1 / num2;
                }
                else{
                    resCalc = "Erro! Divisão por zero";
                } 
                break;    
            default:
                resCalc = "Operador Inválido";    
        }

        resultado.innerHTML = `Resultado: ${resCalc}`;
    }
    else{
        resultado.innerHTML = "Preciso de 2 números para calcular.";
    }  
}