/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function vowels(nomi) {
    const firstLetter = [];

    for (let i = 0; i < nomi.length; i++) {
        firstLetter.push(nomi[i].charAt(0));
    }

    return firstLetter;

}


// Invoca la funzione qui e stampa il risultato in console
console.log(vowels(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]