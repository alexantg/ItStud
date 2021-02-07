

window.onload=oppdater; //kjører opdater ved lasting av nettsiden
        

function oppdater() { //funksjonen som oppdaterer tid og dato på hjemmesiden

    var tid=new Date(); //setter variabelen
    var klokkeutskrift=document.getElementById("klokkeutskrift"); // deklarerer variabelen for utskrift
    var datoutskrift=document.getElementById("datoutskrift");  //deklarerer variabelen for utskrift 
  

    klokkeutskrift.innerHTML=tid. getHours() + ":" +tid.getMinutes() +":" + tid.getSeconds(); //skriver ut klokke
    setTimeout(oppdater, 1000);


    datoutskrift.innerHTML= tid.toLocaleDateString() ; //skriver ut gjeldende dato
    
}
 
    function skrivUt(){ //funksjonen som kjører utskriftsvindu ved button-onlclick

      window.print();
}

