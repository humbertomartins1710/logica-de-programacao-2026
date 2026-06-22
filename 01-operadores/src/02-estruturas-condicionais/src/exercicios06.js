import leia from 'readline-sync'

var valorproduto  = leia.questionFloat("qual o valor do prduto ")

var moeda1 = leia.questionFloat("qantas moedas de um real voce tem")
var moeda50 = leia.questionFloat("quantas moedas de 50 centavos voce tem ")
var moeda25 = leia.questionFloat("quantas moedas de 25 centavos voce tem")
var moeda10 = leia.questionFloat("quantas moedas de 10 centavos voce tem ")
var moeda05 = leia.questionFloat("quantas moedas de 05 centavos voce tem ")

var valormoeda1 = (moeda1 * 1)
var valormoeda050 = (moeda50 * 0.50)
var valormoeda025 = (moeda25 * 0.25)
var valormoeda010 = (moeda10 * 0.10) 
var valormoeda005 = (moeda05 * 0.10)

var valortotal = (valormoeda1)+(valormoeda050)+(valormoeda025)+(valormoeda010)+(valormoeda005)

if (valortotal >= valorproduto) {
    console.log("voce pode comprar o produto")
} else {
    console.log("voce nao pode comprar o produto")
}