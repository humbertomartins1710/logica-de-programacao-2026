import leia from 'readline-sync'

var numero = leia.questionFloat("digite um numero: ")

if (numero % 2 === 0) {
    console.log("o numero e par")
} else {
    console.log("o numero e impar")
}