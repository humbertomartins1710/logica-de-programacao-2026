import leia from 'readline-sync'

//ENTRADA 

var largura = leia.questionInt("digite a largura do retangulo ")
var altura = leia.questionInt("digite a aultura do retangulo ")

// PROCESSAMENTO

var dimencao = (altura * largura )

// SAIDA 

console.log(dimencao)
