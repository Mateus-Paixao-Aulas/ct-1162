// Arrays

// curiosidade -> Stack/Pilha FIFO - First In First Out
             // 0       // 1      // 2
const frutas = ["banana", "goiaba", "caqui"];

// frutas[2] = "tomate";
// frutas[3] = "morango";
// console.log(frutas[0]);
// console.log(frutas[2]);
// console.log(frutas[1]);
// frutas[4] = 123;
// frutas[5] = 456;
// frutas[5] = "Mateus";

frutas.push("novo valor");
frutas.pop();
frutas.pop();
console.log(frutas);
// console.log(frutas[4]);
                //0 //1 
const numeros = [1, [2, 5, 6, 7, 8],3,4,10,20,55];

console.log(numeros[0]); // 1
console.log(numeros[1][2]); // 6
console.log(numeros[2]); // 3

// Loops, for e while
// FOR -> Loop numérico

// let k = 0;
// let condicao = k < 3;
// let incremento = k = k + 1; 
// console.log(k, condicao, incremento);

// exemplo decremento
// for(let i = 3; i > 0; i--){
//     console.log("Oi For!!!", i);
// }

function calculaTabuada(numero){
    // i = i + 1
    for(let i = 0; i <= 10; i++){
        // console.log("Oi For!!!", i);
        console.log(i * numero);
    }

    console.log("----");
}

// calculaTabuada(2);
// calculaTabuada(3);
// calculaTabuada(4);
// calculaTabuada(9);


console.clear();
// WHILE -> Loop condicional

// lição de casa -> refatorar a função tabuada utilizando while
let contador = 0;

// verifica a condição no inicio
while(contador < 5){
    console.log("Oi while!", contador);
    contador++;
}

// console.log("---");

// Executa ao menos uma vez, não verifica a condição no inicio
let contador2 = 0;
do{
    console.log("Oi do-while!", contador2);
    contador2++;
}while(contador2 < 5);