// alert("Funcionou!")

document.write("Abra o devTools para visualizar o que está feito!");

console.log("Funcionou!");
console.error("Não Funcionou!");
console.warn("Presta atenção nisso!");


var brinquedo = "boneca"; // entre aspas ("") é uma string

console.log(brinquedo);
brinquedo = "carrinho";
console.log(brinquedo);
brinquedo = "20";
console.log(typeof brinquedo);
console.log(brinquedo);

var numero = 20.4;
console.log(typeof numero);

var logico = true; // false 
console.log(logico);
console.log(typeof logico);

var naoAtribuido; // Undefined
console.log(naoAtribuido);
console.log(typeof naoAtribuido);

var valorNull = null;
console.log(valorNull); 
// console.log(typeof valorNull); // TODO: falar sobre Object

// camelCase, firstName, lastNameAndFathersName
// PascalCase
// snake_case
// kebab-case

// Tipos primitivos
// String
// Number
// Boolean
// Undefined
// Null

// diferença var, let, const

// declarando sua instrução

function recebeNome(descricao, valor) { // descricao -> parâmetro
    const nomeUsuario = prompt(descricao, valor);

    /**
     * 
     */

    return nomeUsuario;
    console.log("Isso não será executado!");
    /**
     * 
     */
} // declarando minha função

// passei o argumento -> "Digite o seu melhor nome!"
// const nome = recebeNome("Digite o seu nome:", "valor"); // chamando minha função
// const sobrenome = recebeNome("Digite o sobrenome:", "valor2"); // chamando minha função
// console.log(nome, sobrenome);

// condicionais -> if / else

if(false){
    console.log("Entrou no if!!!!");
    /** 
     * 
     * 
     * 
     */
}else{
    console.log("Entrou no else!!!");
}

console.clear();

// Principais operadores

// Aritméticos +, -, *...
let numeroAritmetico = 5 + 3; // 8
numeroAritmetico = 10 - 4; // 6
numeroAritmetico = 6 * 7; //42
numeroAritmetico = 20 / 4; // 5
numeroAritmetico = 10 % 3; // 1
// console.log(numeroAritmetico);

// Atribuição 
let numeroAtribuicao = 10;

// numeroAtribuicao = numeroAtribuicao + 5;
numeroAtribuicao += 5; 
numeroAtribuicao -= 5; 
numeroAtribuicao *= 5; 
numeroAtribuicao /= 5; 
// console.log(numeroAtribuicao);

// Comparação 

const ehIgual = 5 == 5; // = = 
const ehDiferente = 5 != 5; // ! =
const ehMaior = 10 > 5;
const ehMenor = 10 < 5;
const ehMaiorOuIgual = 6 >= 6; // > =
const ehMenorOuIgual = 4 <= 8; // < =
// console.log(ehMenorOuIgual) // boolean

// Lógicos

// AND && 
let andResultado = true && false; // false

// OR ||
let orResultado = true || false; // true

// NOT !
let notResultado = !true; //false

let comboResultado = ehMaior && ehMaiorOuIgual;
comboResultado = 15 > 18 && 5 === 5 || 6 !== 7;

console.log(comboResultado); // boolean


const char = 5;
const char2 = "5";
console.log(typeof char);
console.log(typeof char2);
console.log(char === char2); // = = = 
console.log(char !== char2); // ! = = 