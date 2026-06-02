import leia, { questionFloat } from 'readline-sync'

//ENTRADA 

var nota1 = leia.questionFloat("digite sua primeira nota ")
var nota2 = leia.questionFloat("digite sua segunda nota ")
var nota3 = leia.questionFloat("digite sua terceira nota ")

//PROCESSAMENTO

var media = (nota1 + nota2 + nota3) / 3;
var resultado = media >= 7 ? "aprovado" : "reprovado" 

//SAIDA 

console.log("a media do aluno é: " + media.toFixed(2) + " E ele esta " + resultado);