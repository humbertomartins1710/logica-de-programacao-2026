import leia from 'readline-sync'

//ENTRADA 

var metros = leia.questionFloat("digite os metros para conversao ")

//PROCESSAMENTO

var centimetros = metros * 100;
var milimetros = metros * 1000;

//SAINDA 

console.log("---resultado---")
console.log(metros.toFixed (2) + " metros ")
console.log(centimetros.toFixed (2) + " centimetros")
console.log(milimetros.toFixed (2) + " milimetros")
