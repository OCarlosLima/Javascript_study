// Estruturas condicionais chequam uma condição e tomam um determinado caminho dependendo da resposta
// Sempre vai esperar uma resposta booleana (verdadeiro ou falso)

//Questão: Um site de venda de bebidas alcólicas quer checar se o usuário tem mais de 18 anos
var idade = 21;
if (idade >= 18)
    console.log("Pode comprar");
else
    console.log("Não pode comprar");

console.log("---------------------------------") // Divisoria

// Se tiver mais de uma linha dentro do if ou else deve-se ultilizar {}
var idade = 15;
if (idade >= 18) {
    console.log("Pode comprar");
    console.log("Qual o seu pedido?");
}
else {
    console.log("Não pode comprar");
    console.log("Volte futuramente!");
}

console.log("---------------------------------") // Divisoria

// Caso queira uma segunda verificação, use else if
var idade = 21;
if (idade >= 35) {
    console.log("Pode comprar");
    console.log("Qual o seu pedido?");
}
else if (idade >= 18) {
    console.log("Pode comprar");
    console.log("Antes, mostre a identidade");
}
else {
    console.log("Não pode comprar");
    console.log("Volte futuramente!");
}

console.log("---------------------------------") // Divisoria

// Pode-se utilizar comparadores lógicos para as condições

var idade = 80;
if (idade >= 18 && idade <= 70) {
    console.log("Pode comprar");
    console.log("Qual o seu pedido?");
}
else 
    console.log("Não pode comprar");

console.log("---------------------------------") // Divisoria

// Logica invertida
var idade = 18;
if (idade < 18 || idade > 70)
    console.log("Não pode comprar");
else {
    console.log("Pode comprar");
    console.log("Qual o seu pedido?")
}