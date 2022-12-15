var a = true;
var b = false;

// Ambos valores precisam ser verdadeiros
console.log(a && b);

// Um dos valores precisa ser verdaderos
console.log(a || b);

// Negativo
console.log(!true)
console.log(!false)

console.log("------------------") // SEPARAÇÃO

// Analogia
var idade = 25;

var maior20 = idade >= 20;
var menor20 = !maior20;

console.log("Idade maior que vinte?", maior20);
console.log("Idade menor que vinte?", menor20);