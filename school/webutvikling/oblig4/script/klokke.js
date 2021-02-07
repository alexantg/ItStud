window.onload= oppdater;

function oppdater() { //funksjonen som oppdaterer tid og dato på hjemmesiden

    var tid=new Date(); //setter variabelen
    var klokkeutskrift=document.getElementById("klokkeutskrift"); // deklarerer variabelen for utskrift
  

    klokkeutskrift.innerHTML=tid. getHours() + ":" +tid.getMinutes() +":" + tid.getSeconds(); //skriver ut klokke
    setTimeout(oppdater, 1000);



    
}