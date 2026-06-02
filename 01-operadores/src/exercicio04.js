import leia from 'readline-sync'

//ENTRADA
var valorproduto = leia.questionFloat ("digite o valor do produto R$:")

// PROCESSAMENTO

var desconto = valorproduto - (valorproduto * (10 / 100))


//SAIDA 

console.log("o valor do produto e : R$ " + desconto.toFixed(2))
