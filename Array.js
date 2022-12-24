// Array é uma estrutura de dados que pode armazenar vários dados em sequencia dentro de um vetor
var alunos = new Array("Igor", "Lucas", "Marcos", "José Sarney");
console.log(alunos);

// Pode chamar apenas um dado usando um valor entre colchetes. Todo os dados são sequênciados, começando por 0, chamado de index/indice
console.log(alunos[3]);

// Se chamar um index que não existe, irá retornar o valor undefined/indefinido
console.log(alunos[4]);

// Há outra forma de se criar um Array
var compras = ["Arroz", "Macarrão", "Feijão", "Carne", "Kinder Ovo"];
console.log(compras);

// Lenght é a quantidade de elementos que tem dentro de um Array, podendo chama-lo
console.log(compras.length);

console.log("-----------------------------") // DIVISÃO

// Questão: uma escola quer imprimir uma lista com o nome de todos os alunos de uma classe
// Fazer isto com Array pode diminuir bastante o código e facilita também
var alunos = Array("Léo", "Marcos", "Paulo", "Rebeca", "Lucas", "Thiago", "Luciano", "Igor Vinicius", "Arboleda", "Diego Costa", "Gabriel Neves");
for (i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}

console.log("-----------------------------") // DIVISÃO

// Código de uma forma que não use Array/for
var aluno1 = "Léo";
var aluno2 = "Marcos";
var aluno3 = "Paulo";
var aluno4 = "Rebeca";
var aluno5 = "Lucas";
var aluno6 = "Thiago";
console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
console.log(aluno4);
console.log(aluno5);
console.log(aluno6); // Bem maior...

console.log("-----------------------------") // DIVISÃO

// Juntando o Array e o For também é póssivel chamar o index diretamente para a variável i
for (i in alunos) {
    console.log(alunos[i]);
}
console.log("-----------------------------") // DIVISÃO
// Variação, of pega o elemento
var alunos = Array("Léo", "Marcos", "Paulo", "Rebeca", "Lucas", "Thiago", "Luciano", "Igor Vinicius", "Arboleda", "Diego Costa", "Gabriel Neves");
for (var i of alunos) {
    console.log(i);
}