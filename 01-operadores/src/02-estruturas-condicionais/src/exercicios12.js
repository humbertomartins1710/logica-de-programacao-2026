import leia from 'readline-sync'

var idade = leia.questionInt ("digite sua idade ")

if(idade >= 18){
    var nome = leia.question ("digite seu nome ")
    console.log(nome + "voce esta autorizado a viajar")

} else {
    var outorizacao = leia.keyInSelect (["sim , nao "], "voce foi autorizado pelos pais ");
     if (autorizacao === 0 ) {
        var nome = leia.question("digite seu nome ");
        console.log(nome + "voce esta autorizado a viajar ");

     } else {
        console.log (nome + "voce nao esta autorizado a viajar ")
     }
 }