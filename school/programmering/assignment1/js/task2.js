window.onload= startup; //runs startup at window onload

var num1= parseInt(14); //declares variable num1
var num2= parseInt(12); //declares variable num2


function startup(){
    
    var btnAdd=document.getElementById("btnAdd"); //declares variable btnAdd
    var btnSub=document.getElementById("btnSub");
    var btnMtp=document.getElementById("btnMtp");
    var btnDiv= document.getElementById("btnDiv");

    btnAdd.addEventListener("click" ,addition); //adds an event to btnAdd
    btnSub.addEventListener("click", subtraction);
    btnMtp.addEventListener("click", multiply);
    btnDiv.addEventListener("click", divide);
    
}

function addition(){ //add the two numbers toegether and prints the result

    var result=document.getElementById("result");
    result.innerHTML=(num1+num2);
    console.log(num1+num2);

}

function subtraction(){ //substracts number 1 from number 2 and prinst the result

    var result=document.getElementById("result");
    result.innerHTML=(num1-num2);
    console.log(num1-num2);


}

function multiply(){ //multiplies the two numbers and prints the result

    var result=document.getElementById("result");
    result.innerHTML=(num2*num1);
    console.log(num2*num1);


}
 function divide(){ //divides number 1 by number 2 and prints the result

    var result=document.getElementById("result");
    result.innerHTML=Math.round((num1/num2)*100)/100;
    console.log(num1/num2);

} 