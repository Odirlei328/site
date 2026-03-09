function executaTraducao(){
    let idioma = document.getElementById("idioma").value;
    let resultado = document.getElementById("resultado");
    let frase = "";
        
    switch(idioma){
        case "portugues":
            frase = "Olá Mundo!";
            break;
        case "ingles":
            frase = "Hello Word!";
            break;
        case "espanhol":
            frase = "Hola Mundo!";
            break;
        default:
            frase = "Idioma não definido!";    
    } 
    
    resultado.innerHTML = frase;
}