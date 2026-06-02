import leia from 'readline-sync'

var totalEleitores = leia.questionInt("informe o total de eleitores da cidade: ");
var totalBrancos = leia.questionInt("informe o total de votos brancos da cidade: ");
var totalNulos = leia.questionInt("informe o total de votos nulos da cidade : ");
var totalValidos = leia.questionInt("informe o total de votos validos : ");

// PROSSESAMENTO

var percentualBrancos = (totalBrancos / totalEleitores ) * 100;
var percentualNulos = (totalNulos / totalEleitores ) * 100;
var percentualValidos = (totalValidos / totalEleitores ) * 100;

//SAIDA

console.log("Percentual de votos Brancos " + percentualBrancos.toFixed(2) + "%")
console.log("Percentual de votos Nulos  " + percentualNulos.toFixed(2) + "%")
console.log("Percentual de votos Validos " + percentualValidos.toFixed(2) + "%")
