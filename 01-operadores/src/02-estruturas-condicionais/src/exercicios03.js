import leia from 'readline-sync'

var placa = leia.question("qual e sua placa?")

var ud = placa[placa.length -1];

if(ud === '0'|| ud === '1'){
    console.log("voce nao pode rodar na segunda-feira")
}else if (ud === '2'|| ud === '3' ) {
    console.log("voce nao pode rodar na terça-feira")
}else if (ud === '4' || ud === '5' ) {
    console.log("voce nao pode rodar na quata-feira")
}else if (ud === '6' || ud === '7' ) {
    console.log("voce nao pode rodar na quinta-feira")
}else if (ud === '8' || ud === '9') {
    console.log("voce nao pode rodar na sexta-feira")
}