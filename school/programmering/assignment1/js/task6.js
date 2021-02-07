window.onload = startup;

function startup() {
  var submit = document.getElementById("formSubmit");

  submit.addEventListener("click", checkNumber);
}

function checkNumber() {
  var coffee = document.getElementById("formAmount").value;
  var output = document.getElementById("formResult");

  if(coffee <= 3){

    output.innerHTML = "You definitely need more coffee! How are you awake?"; 
  }

  else{ 
    output.innerHTML = "You need more coffee! You need at least " + (parseInt(coffee) + 1) + " cups in total";

    }
}


// 1. Wrong document name in HTML-link to Javascript
// 2. Wrong syntax in line 4. document.getElementByID/ document.getElementById
// 3. Wrong syntax in window.onload= startup(); this is a function call. It should be window.onload= startup;
// 4. Wrong syntax on if-tests. No parantheses {}
// 5. Wrong syntax on line 15. Should be output.innerHTML not output.innerhtml
// 6. Need to parseInt the cofee variabele because Javascript reeds the input value as a string
