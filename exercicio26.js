const name = document.getElementById("name");
const email = document.getElementById("email");
let phone = document.getElementById("phone").value;
let password = document.getElementById("password").value;
let rePassword = document.getElementById("rePassword").value;

erroNome = document.getElementById("erroNome");
erroEmail = document.getElementById("erroEmail");
erroTelefone = document.getElementById("erroTelefone");
erroSenha = document.getElementById("erroSenha");
erroReSenha = document.getElementById("erroReSenha");
erroMensagem = document.getElementById("erroMensagem");

document.getElementById("name").addEventListener("blur", function(event){
    event.preventDefault(); //cancela o submit para fazermos a validação antes de enviar
    
    if(name.value == ""){
        erroNome.innerText = "Nome obrigatório!";
    }
    else  if (name.length <= 3 || name.length >= 50){
        erroNome.innerText = "O Nome deve ter entre 3 e 50 caracteres!";
        }
        else{
            erroNome.innerText = "";
        }
    }   
});

//adicionar máscara ao telefone
const phoneMask = (value) => {
    if (!value) return "";

    value = value.replace(/\D/g, ''); // Remove tudo que não é dígito
    value = value.replace(/(\d{2})(\d)/, "($1) $2"); // Coloca parênteses no DDD
    value = value.replace(/(\d)(\d{4})$/, "$1-$2"); // Coloca hífen antes dos últimos 4 dígitos
    return value;
}

//validar telefone ao sair do campo
document.getElementById("phone").addEventListener("blur", function(event){
    event.preventDefault(); //cancela o submit para fazermos a validação antes de enviar
    
    phone = document.getElementById("phone").value;

    if(!validaTelefone()){
        erroTelefone.innerText = "Erro ao digitar o telefone!";
    }
    else{
        erroTelefone.innerText = "";

        let input = event.target;
        input.value = phoneMask(input.value);
    }   
});

function validaTelefone(){
    const regexTelefone = /^(\(?\d{2}\)?\s?)(9?\d{4}-?\d{4})$/;

    if (!regexTelefone.test(phone)){        
        return false;
    }    
   return true;
}
/* ------------------------------------------------------------------------*/
function validaSenha(){    
    //senha de 8 a 14 caracteres
    //1 letra maiúscula, 2 letras minusculas, 1 caracter especial e 2 números    
    const regexSenha = /^(?=(?:.*[A-Z]){1,})(?=(?:.*[a-z]){2,})(?=(?:.*[0-9]){2,})(?=(?:.*[\W_]){1,}).{8,14}$/

    if (regexSenha.test(password)){        
        return true;
    }    
   return false;
}

document.getElementById("password").addEventListener("blur", function(event){
    event.preventDefault(); //cancela o submit para fazermos a validação antes de enviar
    
    if(!validaSenha()){
        erroSenha.innerText = "\nA senha precisa ter: \n8 a 14 caracteres com no mínimo: \n1 letra maiúscula, \n2 letras minusculas, \n2 números e \n1 caracter especial\n";
    }
    else{
        erroSenha.innerText = "";
    }   
});

document.getElementById("rePassword").addEventListener("blur", function(event){
    event.preventDefault(); //cancela o submit para fazermos a validação antes de enviar
    
    document.getElementById("password").value != document.getElementById("rePassword").value

    
    if(document.getElementById("password").value != document.getElementById("rePassword").value){       
        erroReSenha.innerText = "As senhas não são iguais!";

    }
    else{
        document.getElementById("erroReSenha").innerText = "";
    }
});

/* ------------------------------------------------------------------------*/

function validaForm(){
    if (name.value === ""){
        erroNome.innerText = "Preencha o campo Nome!";
        return false;
    }
    else{
        erroNome.innerText = "";
    }
  
    if (email.value === ""){
        erroEmail.innerText = "Preencha o campo Email!";
        return false;
    }
    else{
        erroEmail.innerText = "";
    }
   
    if (message === ""){
        erroMensagem.innerText = "Preencha o campo Mensagem!";
        return false;
    }
    else{
        erroMensagem.innerText = "";
    }

    if (name.length <= 3 || name.length >= 50){
        erroNome.innerText = "O Nome deve ter entre 3 e 50 caracteres!";
        return false;
    }
    else{
        erroNome.innerText = "";
    }

    if (email.length <= 3 || email.length >= 70){
        erroEmail.innerText = "O Email deve ter entre 3 e 70 caracteres!";
        return false;
    }
    else{
        erroEmail.innerText = "";
    }

    /* EXPRESSÃO REGULAR PARA VALIDAR EMAIL */
    /* veja que não tem aspas, não é string, por isso tem a função test() */
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!emailRegex.test(email.value)){
        erroEmail.innerText = "Por favor, insira um email válido!";
        return false;
    }
    else{
        erroEmail.innerText = "";
    }

    if (message.textLength <= 10 || message.textLength >= 300){
         erroMensagem.innerText = "A mensagem deve ter entre 10 e 300 caracteres!";
        return false;
    }
    else{
        erroMensagem.innerText = "";
    }
    return true;
}

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); //cancela o submit para fazermos a validação antes de enviar
    
    if(validaForm()){
        alert("Formulário validado!");
    }
});

/*
const emailRegex = 
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

console.log('foo.bar@gmail.com =>', emailRegex.test('foo.bar@gmail.com'))
console.log('foo.bar@gmail.com.br =>', emailRegex.test('foo.bar@gmail.com.br'))
console.log('foo.bar@gmail.com.br.br =>', emailRegex.test('foo.bar@gmail.com.br.br'))
console.log('foo.bar@gmail. =>', emailRegex.test('foo.bar@gmail.'))
console.log('foo.bar@gmailcom =>', emailRegex.test('foo.bar@gmailcom'))
console.log('foo.bargmail.com =>', emailRegex.test('foo.bargmail.com'))
console.log('@gmail.com =>', emailRegex.test('@gmail.com'))
*/