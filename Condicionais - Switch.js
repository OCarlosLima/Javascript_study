// Comando Switch é um condicional que possui "casos" e compara valores

// Questão: o colegio quer saber se um aluno passou (media de 7) e quer classifica-los em "Ótimo", "Bom" e "Ruim" de acordo com a média
var nota1 = 1;
var nota2 = 7;
var media = (nota1 + nota2) / 2;
var conceito = "";
if (media >= 8.5) {
    conceito = "Ótimo";
}
else if (media >= 7) {
    conceito = "Bom";
}
else {
    conceito = "Ruim";
}
// As condições são todas verificadas uma por uma, de cima para baixo, para baixo, iniciando naquela que der true. Para quebrar a ordem use "break"
switch (conceito) {
    case "Ótimo":
        console.log("Média " + media)
        console.log("Parabéns, você é um ótimo aluno!");
        break;
    case "Bom":
        console.log("Média " + media);
        console.log("Muito bom aluno.");
        break;
    case "Ruim":
        console.log("Média " + media);
        console.log("Estude mais...");
        break;
    default:
        console.log("Houve algum erro!");
}