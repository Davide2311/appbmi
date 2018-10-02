/* Calcoli per la app sul BMI */
function calcola(){
//identificare i dati del form
var peso=document.forms.bmi.peso.value;
var altezza=document.forms.bmi.altezza.value;
var sesso=document.forms.bmi.sesso.value;
//verifico se l'utente e m o f
if(sesso='m'){
     //applico la formula bmi per m
     var totale = pow(base,exp)
     /* Math.pow(base,exp)
      *Math.pow/altezza,2*/
     document.getElementById('calcola').innerHTML='BMI ='+totale;
     }
     else if{sesso?'f'{
     //applico formula bmi per f 
     var totale= (peso/(altezza*altezza))*0.9;
     getElementById('risultato'); risultato.innerHTML="BMI" = "+"res;
}
function cancella(){
     document.get.ElementById('calcola').innerHTML="";
}
