// A função da um "apelido" a um bloco de comando que, toda vez que for solicitado, o computador irá executar todo o bloco de comando

// Exemplo de um bloco de comando
{
    var nota1 = 7.6;
    var nota2 = 9;
    var media = (nota1 + nota2) / 2;
    console.log(media);
}

// Declarando uma função com os mesmos comandos
// Ela é composta pelo elemento "function" seguido pelo nome da função e em seguida o bloco de comando
// Ela não é executada até que seja solicitada pelo computador
function mediaaluno(){
    var nota1 = 7.6;
    var nota2 = 9;
    var media = (nota1 + nota2) / 2;
    console.log(media);
}

// Para executar uma função já declarada, deve-se escrever o nome dela
mediaaluno();

// Pode-se utilizar de argumentos(valores) na hora de declarar uma função
function argumento(n1, n2){
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
    console.log(media);
}
argumento(7.6, 9);

// Com isso, pode-se obter resultados diferentes com a mesma função
argumento(10, 6);
argumento(5, 6);
argumento(7, 8)

// Uma função também pode retornar um valor
function mediaaluno(n1, n2){
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
    return media;
}
var result1 = mediaaluno(6, 7);
var result2 = mediaaluno(8, 7);
console.log(result1 + " e " + result2);