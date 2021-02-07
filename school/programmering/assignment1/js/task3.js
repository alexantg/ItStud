window.onload=startup; //runs statup function at window onload

var num1=  parseInt(prompt("Please enter a number")); //declares variable num1
var num2=  parseInt(prompt("Please enter a second number"));  //declares variable num2

function startup (){ //function startup

    var chosen= document.getElementById("chosen"); //declares variable chosen
    chosen.innerHTML="You chose the numbers " + num1 + " and " + num2 + "!"; //sets innerHTML of HTML- element

    if(isNaN(num1)&& isNaN(num2)){ //checks if number is not a number
        chosen.innerHTML="No numbers chosen"
    }
 
    var btnAdd=document.getElementById("showAdd"); //declares variable button
    var btnSub=document.getElementById("showSub");
    var btnMtp=document.getElementById("showMtp");
    var btnDiv= document.getElementById("showDiv");
    
    btnAdd.addEventListener("click" ,addition); //adds event to button
    btnSub.addEventListener("click", subtraction);
    btnMtp.addEventListener("click", multiply);
    btnDiv.addEventListener("click", divide);

}
 
function addition(){ //function calculates sum and prints it
    var result=document.getElementById("result");
    result.innerHTML=(num1+num2);
    console.log(num1+num2);


}

function subtraction(){ //function calculates substraction and prints it
    var result=document.getElementById("result");
    result.innerHTML=(num1-num2);
    console.log(num1-num2);

}

function multiply(){ //function calculates multiplication and prints it
    var result=document.getElementById("result");
    result.innerHTML=(num2*num1);
    console.log(num2*num1);

}
    function divide(){ //function calculates division and prints it
    var result=document.getElementById("result");
    result.innerHTML=Math.round((num1/num2)*100)/100;
    console.log(num1/num2);

}


