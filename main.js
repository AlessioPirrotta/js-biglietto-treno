let numeroChilometri = prompt("digitare i km da percorrere", "10")
let etàPasseggero = prompt("digitare età passeggero", "19")
const euroKm = 0.21
let prezzoBiglietto = euroKm * numeroChilometri


if(etàPasseggero < 18){
    prezzoBiglietto = (prezzoBiglietto * 0.2).toFixed(2)
}
else if (etàPasseggero > 65){
    prezzoBiglietto = (prezzoBiglietto * 0.4).toFixed(2)
}

document.writeln("L'importo del tuo biglietto é: €",prezzoBiglietto)

 
console.log("numero Km:", numeroChilometri)
console.log("età passeggero:", etàPasseggero)
console.log("il prezzo del tuo biglietto è:€",prezzoBiglietto)






