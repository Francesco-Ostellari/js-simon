/* Descrizione:
Visualizzare in pagina 5 numeri casuali poi fateli sparire.
 Da lì parte un timer di 30 secondi.
  Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

let numbers = [];

for (let index = 0; index < 5; index++) {
  let number = Math.floor(Math.random()* 1000);
  numbers.push(number);
  console.log(number); 
}
console.log(numbers);