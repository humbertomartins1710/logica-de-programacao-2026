import leia from 'readline-sync'

//ENTRADA
 
var anos = leia.questionInt("quantos anos voce tem ?")
var meses = leia.questionInt("quantos meses ?")
var dias = leia.questionInt("quantos dias ?")

//PROCESSAMENTO 

var idade = (anos * 365);
var idade2 = (meses * 30)

//SAIDA 

console.log(`a sua idade em dias e ${idade + idade2 + dias}`)



