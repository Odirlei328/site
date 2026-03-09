var num2 = 5;

function varTeste1() {
    var num1 = 1;
    var num1 = 2; //se fosse com let daria erro, var permite declarar várias vezes pois tem escopo global
    //já a declaração const pode ser global ou local, mas não altera o valor

    let num2 = 3;

    console.log(num1);
    console.log(num2);
}

varTeste1();
console.log(num2);
/* o resultado é 2 3 5 */