import leia from 'readline-sync'

//ENTRADA
var celcius = leia.questionFloat("Digite a temperatura em Graus Celcius: ")
var fr = (celcius * 1.8 ) + 32;
var kelvin = celcius + 273.15;

//SAIDA
console.log(celcius + " graus celcius e igual a " + fr + "graus fr ");
console.log(celcius + " graus celcius e igual a " + kelvin + "graus em kelvin");
