let parolaInserita = prompt('Inserisci una parola palindroma');


function parolaPalindroma(string){
  for(let i = 0; i < string.length / 2; i++){
    if(string[i] !== string[string.length -1 - i]){
      return false;
    }
  }
  return true;
}

// let parolaPalindroma = invertParola(parolaInserita);

const risultatoParola = document.getElementById('word'); 

if(parolaPalindroma(parolaInserita)){
  risultatoParola.innerHTML = `La tua parola <strong> ${parolaInserita} </strong> è palindroma!`;
}else{
  alert('Inserisci una parola palindroma');
  risultatoParola.innerHTML = `La tua parola <strong> ${parolaInserita} </strong> NON è palindroma!`;
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

function numeroPc(min, max){
  return Math.floor(Math.random() * (max - min + 1) +min);

}

let pcNumber = numeroPc(1, 5);


function somma(numA, numB){
  let somma = numA + numB;

  if(somma % 2 === 0){
    somma = 'pari';
  }else{
    somma = 'dispari';
  }

  return somma;
}

let resultNumber = somma(numeroScelto, pcNumber);

if(resultNumber === numeroScelto){
  result = 'Hai vinto!';
}else{
  result = 'Hai perso!';
}

number.innerHTML = `Hai scelto il numero ${numeroScelto} <br> 
Il numero del pc è ${pcNumber} <br>
${result}`