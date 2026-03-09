function setBackgrounColor(color){
    document.body.style.backgroundColor = color;
}

document.getElementById("redButton").addEventListener("click", function () { setBackgrounColor("red"); });
document.getElementById("greenButton").addEventListener("click", function () { setBackgrounColor("green"); });
document.getElementById("blueButton").addEventListener("click", function () { setBackgrounColor("blue"); });

//event tem a tecla que foi pressionada

document.getElementById("inputBox").addEventListener("keypress", function (event) { alert("Tecla: "+event.key); });


document.getElementById("nroPedido").addEventListener("keyup", 
    function (event) { 
        document.getElementById("nroPedido").value = "";

        switch (parseInt(event.key)) {
            case 1:
                alert("Pizza de Calabreza"); 
                break;
            case 2:
                alert("Pizza de 4 Queijos"); 
                break;            
            case 3:
                alert("Pizza de Frango com Catupiry"); 
                break;
            case 4:
                alert("Pizza de Brigadeiro"); 
                break;
            default:
                alert("Número do Pedido Inválido!");   
        }    
    }
);

