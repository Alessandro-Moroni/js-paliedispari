let parolaInserita = prompt('Inserisci una parola palindroma');

// const parolaUsata = parolaInserita.split('');
// const parolaPalindroma = parolaUsata.reverse();
// const parolaFinale = parolaPalindroma.join('');

let parolaFinale = invertParola(parolaInserita);

const risultatoParola = document.getElementById('word'); 

if(parolaInserita == parolaFinale){
  risultatoParola.innerHTML = `La tua parola <strong> ${parolaFinale} </strong> è palindroma!`;
}else{
  alert('Inserisci una parola palindroma');
  risultatoParola.innerHTML = `La tua parola <strong> ${parolaInserita} </strong> NON è palindroma perchè il risultato è <strong> ${parolaFinale} </strong>!`;
}

function invertParola(string){
  let stringInversa = string.split('').reverse().join('');
  return stringInversa;
}

// Pari Dispari

let pariDispari = prompt('Scegli pari o dispari');
const risultato = ['pari', 'dispari'];
let verifica = false;

const risultatoScritto = document.getElementById('pari-dispari')

for(let i = 0; i < risultato.length; i++){
  if(pariDispari == risultato[i]){
    verifica = true;
  }
}

if(verifica){
  alert('Buona fortuna!');
  risultatoScritto.innerHTML = `Hai scelto <strong> ${pariDispari} </strong>.`;

}else{
  alert('Devi inserire pari o dispari!')
}

const number = document.getElementById('number');
let numeroScelto = parseInt(prompt('Inserisci un numero da 1 a 5'));
let numeroComputer = (Math.ceil(Math.random() * 5));
// let sommaNumeri = numeroScelto + numeroComputer;
console.log(numeroComputer);
console.log(sommaNumeri);

function sommaNumeri(numeroScelto, numeroComputer){
  
  if((numeroScelto + numeroComputer) % 2){
    number.innerHTML = `Il risultato è <strong> pari </strong>.`;
  }else{
    number.innerHTML = `Il risultato è <strong> dispari </strong>.`;
  }
  return numeroScelto + numeroComputer;
}