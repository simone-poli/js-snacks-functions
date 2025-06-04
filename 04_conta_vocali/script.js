/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
    function countVowels(vocali){
        const vowelsNumber = [];
        for (let i = 0; i < vocali.length; i++){
            if (vocali[i] ==='a', 'e', 'i', 'o', 'u'){
                vowelsNumber.push(vocali.length);
            }
        }
        return vowelsNumber;
    }
    const vowels = countVowels(word);
// Invoca la funzione qui e stampa il risultato in console
console.log(vowels);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)