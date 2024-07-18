document.write("Abra o devTools para visualizar o que está feito!");

function exemploVar() {
    var x = 1;

    if(true){
        var x = 2;
        console.log(x); // 2 mesma variável, escopo global / função
    }
    console.log(x); // 2, foi sobrescrita
}

function exemploLet() {
    let y = 1;

    if(true){
        let y = 2;
        console.log(y); // 2 variável diferente, escopo de bloco / local
    }
    console.log(y); // 1, foi sobrescrita
}

function exemploConst() {
    const z = 1;

    if(true){
        const z = 2;
        // const z = 2; // Identifier 'z' has already been declared (at 
        console.log(z); // 2 variável diferente, escopo de bloco / local
    }
    console.log(z); // 1, foi sobrescrita
}

// exemploVar();
// exemploLet();
// exemploConst();

// Declare uma função que recebe idade, 
// e retorna se essa idade é maior de idade (18 anos) 
// sendo o retorno um valor booleano

function ehMaiorDeIdade(){
    const idade = prompt("Digite sua idade");
    if(idade >= 18){
        console.log("é maior de idade");
        return true;
    }else{
        console.log("é menor de idade");
        return false;
    }
}

// Quero uma função que receba dois números e retorne
// sua soma

// console.log(somar(10,20)); -> curiosidade pesquisar sobre: hoisting

function somar(n1, n2) {
    return n1 + n2;
}

// const resultado = ehMaiorDeIdade();
// console.log(resultado);

const resultado = somar(10, 5);
console.log(resultado);