// Messaggio alrt di prova per verificare che il file sia linkato correttamente
// alert("Javascript inserisci la tua mail");


// chiediamo all'utente la sua email

let userEmail = prompt('Inserisci la tua email');
console.log(userEmail);


// creiamo la struttura dati che contiene la lista delle email (Array)

const email = ['robyledda@pippo.it', 'alex@ciao.it', 'antoledda@kita.it', 'gianlu@niki.it'];
console.log(email);


// creiamo una variabile di controllo per stabilire che la mail dell'utente sia autorizzata

let found_email = false;

for (let i = 0; i < email.length; i++){
    if (email[i] === 'robyledda@pippo.it'){
        found_email = true;
    }
}

if (found_email === true) {
    console.log('La tua email e valida');
}

else {
    console.log('La tua email non e valida');
}