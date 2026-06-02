import leia from 'readline-sync'

// ENTRADA
var number = leia.question("digite um numero")

//PROCESSAMENTO
var antecessor = number - 1 ;
 
// SAIDA
console.log("numero antecessor e : " + antecessor)