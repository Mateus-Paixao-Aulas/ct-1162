
// Declarando um objeto,
const pessoa = { 
    // nome -> propriedade
    nome: "Andre",
    idade: 20,
}

// console.log(pessoa.nome);
// console.log(pessoa.idade);

const aluno = {
    nome: "Mateus",
    idade: 20,
    turma: 1162,
    notas: [8,5,3]
}

const aluno2 = {
    nome: "Fagner",
    idade: 20,
    turma: 1162,
    notas: [10, 9, 8, 2, 4, 5, 6, 6, 7] // posso ter arrays e outros tipos como propriedade
}

const aluno3 = {
    nome: "Felipe",
    idade: 20,
    turma: 1162,
    notas: [10,10,10,9],
    detalhes: {
        camera: true,
    }
}

const mediaAluno2 = calcularMedia(aluno2)
const mediaAluno3 = calcularMedia(aluno3)

console.log(aluno2.nome, mediaAluno2);
console.log(aluno3.nome, mediaAluno3);

// console.log(aluno);
// console.log(aluno.notas[0]);
// console.log(aluno.notas[1]);
// console.log(aluno.notas[2]);

// let soma = 0;
// for(let i = 0; i < aluno2.notas.length; i++){
//     soma = soma + aluno2.notas[i];
//     // console.log(aluno2.notas[i]);
//     // aluno2.notas[0] 
//     // aluno2.notas[1] 
//     // aluno2.notas[2]
//     // aluno2.notas[3]
// }

// console.log(soma / aluno2.notas.length);

// Dado um objeto aluno, calcule a media.
function calcularMedia(a){
    // console.log(a.notas.length); 
    // Antes de refatorar
    // return (a.notas[0] + a.notas[1] + a.notas[2]) / 3
    
    // Depois de refatorar
    let soma = 0;
    for(let i = 0; i < a.notas.length; i++){
        soma = soma + a.notas[i];
    }

    return soma / a.notas.length
}


const j = 3;
console.log(aluno2.notas[j]);

const alunos = [aluno, aluno2, aluno3];
alunos.push({
    nome: "Alan",
    idade: 20,
    notas: []
});

console.log(alunos);
// console.log(alunos[2].notas[3]);
// console.log(aluno3.detalhes.camera);

const ultimoIndice = alunos.length-1;
const ultimoAluno =  alunos[ultimoIndice];

console.log(ultimoAluno);

console.clear();

alunos[3].detalhes = {
    camera: false
}

// alunos[4] = {
//     nome: "Aridan",
//     idade: 20,
//     notas: [5],
// }

alunos.push({
    nome: "Aridan",
    idade: 20,
    notas: [5],
});

console.log(alunos);

