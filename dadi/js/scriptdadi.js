// Messaggio alert per verificare il link
// alert("Javascript inserisci un numero");


// Creo la struttura dati che contiene i numeri da 1 a 6 (Array)


// const listanumeri = [1 , 2, 3, 4, 5, 6];
// console.log(listanumeri);


// // Chiedo all'utente di inserire un numero da 1 a 6

// let userNumber = prompt('Inserisci un numero da 1 a 6');
// console.log(userNumber);






// variabile assegnazione numero per l'utente a random

let Usernumber = Math.floor(Math.random() * 6) + 1;
console.log(Usernumber, 'Numero Giocatore');


// variabile assegnazione numero per il computer a random
let Computernumber = Math.floor(Math.random() * 6) + 1;
console.log(Computernumber, 'Numero Computer');


// creo la condizione che stabilisce la vittoria

if (Usernumber > Computernumber){
    console.log('Vince il giocatore')

} else if (Usernumber < Computernumber){
    console.log('Vince il Computer')

} else {
    console.log('Pareggio')
}

