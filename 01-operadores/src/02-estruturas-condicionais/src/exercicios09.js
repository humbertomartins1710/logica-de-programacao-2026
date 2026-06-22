import leia from 'readline-sync'

var nome = leia.question ("digite seu seu nome ")
var salario = leia.questionFloat ("digite seu salario ")
var dependentes = leia.questionInt ("digite o numero de dependentes")

var porcentagem = 0.0;
switch(dependentes) {
    case 0 :
        porcentagem = 2/100;
        break;
    case 1:
        porcentagem = 5 /100; 
        break;
    case 2:
        porcentagemm = 7/100;
        break;
    case 3:
        porcentagem = 10/100
        break;
    default :
        porcentagem = 15/100



}

var salariofinal = salario + (salario * porcentagem);
console.log ("o seu salario final com "+ dependentes + " ")