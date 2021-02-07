
window.onload = startup; //runs function startup on window onload


function startup() { 
  var btnBye = document.getElementById("btnBye"); //declares variable btnBye
  var btnHello= document.getElementById("btnHello"); //declares variable btnHello

  btnBye.addEventListener("click", msgBye); //adds event "click" to btnBye
  btnHello.addEventListener("click", msgHello); //adds event "click" to btnHello
}


function msgHello(){
    alert('Hi you!') //shows alert
}


function msgBye() {
  alert('Get out of my sight plebeian!'); //shows alert
}

