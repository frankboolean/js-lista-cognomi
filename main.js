// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova
// lista
var lista =["Rossi","Gianni","Sacco","Brumotti","Arcuri"];

// inserire cognome
var cognomeScelto = prompt("Mi dail il tuo cognome per aggiungerlo alla lista delgi invitati?");



lista.push(cognomeScelto);

lista.sort();


console.log(lista);

// lista
var itemN, contenutoPrecedente;

for (var i = 0; i < lista.length; i++){
  itemN = lista[i];
  contenutoPrecedente = document.getElementById('msg').innerHTML;
   document.getElementById('msg').innerHTML = contenutoPrecedente + "<li>" + itemN + "</li>";

}




// for (var i=0; i < lista.sort; i++)
