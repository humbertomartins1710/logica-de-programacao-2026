import leia from 'readline-sync'

var numerodemacas = leia.questionFloat ("quantas macas voce quer comprar ?")

if (numerodemacas >= 0 && numerodemacas <= 11){
    console.log (numerodemacas * 0.30)
} else {
    console.log (numerodemacas * 0.25)
}
