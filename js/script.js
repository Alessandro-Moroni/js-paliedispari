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
  let stringeInversa = string.split('').reverse().join('');
  return stringeInversa;
  console.log(stringeInversa);
}


