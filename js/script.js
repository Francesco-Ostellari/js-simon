/* Descrizione:
Visualizzare in pagina 5 numeri casuali poi fateli sparire.
 Da lì parte un timer di 30 secondi.
  Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

let div = document.getElementById('div-number');
let numbers = [];

for (let index = 0; index < 5; index++) {
  let number = Math.floor(Math.random()* 1000);
  while (numbers.includes(number)) {
    number = Math.floor(Math.random() * (max - min + 1) + min);
  }
  numbers.push(number);
  console.log(number); 
}
console.log(numbers);

div.innerHTML = 'i numeri che ti devi ricordare sono: ' + numbers.join (' - ') +' ' + 'hai 5 secondi per memorizzarli';

// funzione per memorizzare i numeri
setTimeout(function () {
  div.innerHTML = '';

  // funzione per impostare il timer 30 secondi
  setTimeout (function () {

    div.innerHTML ='ricordati i numeri per 30 secondi';

    // funzione per confrontare quanti numeri ha indovinato l'utente
    setTimeout (function () {
  
      // array numeri utente
      let numbersUser = [];
  
      // contatore
      let contatore = 0;
  
      // array numeri indovinati dall'utente
      let numeriCorretti = [];
  
      for (let index = 0; index < numbers.length; index++) {
        let numberUser = parseInt(prompt(`Dovrai inserire i 5 numeri random che hai memorizzato. Inserisci il ${index + 1}°`));
  
        // //pusho i numeri nell'array
        numbersUser.push(numberUser);
  
        //se il numero scritto dall'utente è presente nell'array random iniziale, allora il contatore cresce
        if (numbers.includes(numberUser) && !numeriCorretti.includes(numberUser) ) {
          contatore += 1;
          numeriCorretti.push(numberUser);
        }  
      }
      console.log(numbersUser);
      console.log('hai indovinato ' + contatore + ' numeri');
  
  
      // switch per stampare il messaggio corretto a video in base ai numeri corretti dell'utente
      switch (contatore) {
        case 0:
          div.innerHTML = `<p>I numeri randomici che dovevi ricordare erano: ${numbers.join(' - ')}</p>
                           <p>Hai inserito: ${numbersUser.join(' - ')}</p>
                           <p>Non hai indovinato nessun numero.</p>`;
          break;
        case 1:
          div.innerHTML = `<p>I numeri randomici che dovevi ricordare erano: ${numbers.join(' - ')}</p>
                           <p>Hai inserito: ${numbersUser.join(' - ')}</p>
                           <p>Congratulazioni! Hai indovinato ${contatore} numero: ${numeriCorretti.join (' - ')}.</p>`;
          break;
        case 5:
          div.innerHTML = `<p>I numeri randomici che dovevi ricordare erano: ${numbers.join(' - ')}</p>
                           <p>Hai inserito: ${numbersUser.join(' - ')}</p>
                           <p>Congratulazioni! Hai indovinato tutti i numeri: ${numeriCorretti.join (' - ')}.</p>`;
          break;
        default:
          div.innerHTML = `<p>I numeri randomici che dovevi ricordare erano: ${numbers.join(' - ')}</p>
                           <p>Hai inserito: ${numbersUser.join(' - ')}</p>
                           <p>Congratulazioni! Hai indovinato ${contatore} numeri: ${numeriCorretti.join (' - ')}.</p>`;
          break;
      }
      
    }, 100);
  }, 3000);

}, 5000);