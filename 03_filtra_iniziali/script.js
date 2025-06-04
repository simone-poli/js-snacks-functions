/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const firstLetterNames = [];


// Dichiara la funzione qui.
function firstLetter(nomi){
        for (let i = 0; i < nomi.length ; i++){
            if (names[i].charAt(0) === letter){
                firstLetterNames.push(nomi[i])
            }
        }
        return firstLetterNames;
    }
    let letter = 'A'
    

// Invoca la funzione qui e stampa il risultato in console
    console.log(firstLetter(names))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]