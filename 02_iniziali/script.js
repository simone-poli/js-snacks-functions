/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function vowels(names) {
    const firstLetter = [];

    for (let i = 0; i < names.length; i++) {
        firstLetter.push(names[i].charAt(0));
    }

    return firstLetter;

}
const result = vowels(names);

// Invoca la funzione qui e stampa il risultato in console
console.log(result);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]