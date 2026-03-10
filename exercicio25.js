const botao = document.getElementById("botaoAddTarefa");
const botaoReset = document.getElementById("botaoReset");
const conteudo = document.getElementById("conteudo");

function adicionaTarefa(){
    let listaDeTarefas = document.getElementById("tarefas");
    let textoTarefa = document.getElementById("textoTarefa");
    let valortextoTarefa = (textoTarefa.value).trim();

    if (valortextoTarefa != ""){
        const node = document.createElement("li");
        const textnode = document.createTextNode(valortextoTarefa);
        node.appendChild(textnode);
        listaDeTarefas.appendChild(node);
        
        textoTarefa.value = "";
    }    
    textoTarefa.focus();
}

//começar já com o foco
textoTarefa.focus();

//let listaDeTarefas = document.getElementById("conteudo").innerHTML = "Sem tarefas para o dia de hoje";


//adicionar tarela pelo botão clicado
botao.addEventListener('click', adicionaTarefa);

//se pressionar Enter no texto adiciona a tarefa
textoTarefa.addEventListener('keyup', function (event){
    let ultimaTecla = event.key;

    if (ultimaTecla === "Enter"){
        adicionaTarefa();
    }
});

//apagar a lista
botaoReset.addEventListener('click', function(){    
    conteudo.removeChild(document.getElementById("tarefas"));
    conteudo.innerHTML = "<p>Sem tarefas para o dia de hoje</p>";

    textoTarefa.focus();
});
    