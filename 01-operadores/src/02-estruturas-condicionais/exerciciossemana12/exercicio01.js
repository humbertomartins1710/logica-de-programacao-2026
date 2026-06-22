import leia from 'readline-sync'

var nota1 = leia.questionFloat ("qual e sua primeeira nota")
var nota2 = leia.questionFloat ("qual e sua segunda nota ")
var nota3 = leia.questionFloat ("qual e sua terceira nota ")
var nota4 = leia.questionFloat ("qual e sua quarta nota ")
var nota5 = leia.questionFloat ("qual e sua quinta nota ")

var frequencia = leia.questionFloat ("quantos porcento de frequencia voce tem ")

var media = nota1 + nota2 + nota3 + nota4 + nota5 / 5; 

if (media >= 7 && media >= 75) {
    console.log("voce passou de ano ")
}else {
    console.log("infelizmente voce reprovou ")
}
