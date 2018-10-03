/* calcoli in js */
function calcolo(){
	/* dichiarazione variabili del form */
    var peso=document.forms.BMI.peso.valueAsNumber;
    var altezza=document.forms.BMI.altezza.valueAsNumber;
    var sesso= document.forms.BMI.sesso.value;
    /* i dati non possono essere vuoti --> required */
    if(sesso = "m"){
	var totale = peso/(altezza*altezza);
	document.getElementById('calcola').innerHTML="BMI ="+totale;
          if(totale<20,1){
          document.getElementById('spiegazione').innerHTML="Sottopeso"
          }
          else if(totale<20,1){
          document.getElementById('spiegazione').innerHTML="Peso ottimale"
          }
           else if(totale<20,1){
          document.getElementById('spiegazione').innerHTML="Sovrappeso"
          }
          else if(totale<20,1){
          document.getElementById('spiegazione').innerHTML="Obesità di I grado"
          }
          else if(totale<20,1){
          document.getElementById('spiegazione').innerHTML="Obesità di II grado"
          }
          else if{
          document.getElementById('spiegazione').innerHTML="Obesità di alto grado"
          }
	}
    else if(sesso="f"){
	var totale = (peso/(altezza*altezza))*0.9;
	document.getElementById('calcola').innerHTML="BMI ="+totale;
          if(totale<18,7){
          document.getelementById('spiegazione').innerHTML='Sottopeso'
       }
	}
}

  function cancella(){
    document.getElementById('calcola').innerHTML=" "; 
  }

