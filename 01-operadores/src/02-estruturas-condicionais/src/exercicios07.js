import leia from 'readline-sync'

var salario  = leia.questionFloat ("qual seu salario ?")

var valoremprestimo = leia.questionFloat ("qual o valor do emprestimo que voce deseja ")

var prestacoes = leia.questionInt ("quantas prestacoes voce quer fazer ")

var valordasprestacoes = (valoremprestimo / prestacoes)

if (valordasprestacoes >= salario * 0.30 ){
    console.log("voce nao pode pagar ")
} else {
    console.log("voce pode pagar ")
}
 