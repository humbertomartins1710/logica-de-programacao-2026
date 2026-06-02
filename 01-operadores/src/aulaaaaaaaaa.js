import leia from 'readline-sync'

//ENTRADA

var corrida1 = leia.questionInt("digite o valor da primeira corrida");
var corrida2 = leia.questionInt("digite o valor da segunda corrida");
var corrida3 = leia.questionInt("digite o valor da terceira corrida");
var corrida4 = leia.questionInt("digite o valor da quarta corrida");
var corrida5 = leia.questionInt("digite o valor da quinta corrida");

var valorfinal = corrida1 + corrida2 + corrida3 + corrida4 + corrida5;
var descontodoapp = valorfinal * (25 / 100);
var valorliquido = valorfinal - descontodoapp;

console.log ("o valor total arrecadado com os descontos e de R$" +valorliquido.toFixed(2))


 








