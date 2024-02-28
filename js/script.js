let parolaInserita = prompt('Inserisci una parola palindroma').toLocaleLowerCase;


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



