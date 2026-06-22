import leia from 'readline-sync'

var cliente1 = leia.question ("qual seu nome ")
var cliente2 = leia.question ("qual seu nome ")
var valorc1 = leia.questionFloat ("qual o valor da sua compra")
var valorc2 = leia.questionFloat ("qual o valor da sua compra")

var valortotal = valorc1 + valorc2; 
console.log(valortotal)
var media = valortotal / 2 ;
console.log(media)

if(valorc1> 20 ) {
    console.log(` ${cliente1} fez uma compra acima de 20 reais`)
} else if (valorc2> 20)  {
    console.log(`${cliente2} fez uma compra acima de 20 reais `)
}