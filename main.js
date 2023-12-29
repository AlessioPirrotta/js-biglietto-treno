// 

// let numeroChilometri = document.getElementById (km) 
// let etàPasseggero = document.getElementById (eta) 



// let button = document.getElementById ("input")


// button .addEventListener("click", function(){
//     let numeroChilometri = document.getElementById(km).value
//     console.log(numeroChilometri)
// })





// document.writeln("L'importo del tuo biglietto é: ","€ ", prezzoBiglietto)

 
// console.log("numero Km:", numeroChilometri)
// console.log("età passeggero:", etàPasseggero)
// console.log("il prezzo del tuo biglietto è:€",prezzoBiglietto)
const euroKm = 0.21


let buttonSend = document.getElementById("btn")


buttonSend.addEventListener("click", 
function(){
    let valueNome = document.getElementById("nome").value
    console.log("nome:", valueNome )
    let valueCognome = document.getElementById("cognome").value
    console.log("cognome:", valueCognome )
    let valueEta = document.getElementById("eta").value
    console.log("Età:", valueEta )
    let valueKm = document.getElementById("km").value
    console.log("km:", valueKm )
    let prezzoBiglietto = euroKm * valueKm
    
if(valueEta < 18){
     prezzoBiglietto = (prezzoBiglietto -(prezzoBiglietto * 0.2)).toFixed(2)
 }
 else if (valueEta > 65){
     prezzoBiglietto = (prezzoBiglietto -(prezzoBiglietto * 0.4)).toFixed(2)
 }
 console.log("prezzo biglietto", prezzoBiglietto)

 document.getElementById("spa").innerHTML = "€ "+ prezzoBiglietto

})










