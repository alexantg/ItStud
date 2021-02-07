
//runs function startup at window onload

window.onload= startup;

function startup(){ //declares var btn and assigns it an event

    var btn= document.getElementById("btnCal");

    btn.addEventListener("click", calculate);
    

}

 //calculates the two input values based on what mathematical operation is chosen

function calculate(){ 

    var selected= parseInt( document.getElementById("slct").value); 
    var num1= parseInt(document.getElementById("inp1").value);
    var num2= parseInt(document.getElementById("inp2").value);

    var result=document.getElementById("result");
    var oddEven= document.getElementById("oddEven");


    


    if(selected===1){ //chekcs if addition is chosen in select-box and calculates

     var calculated= num1+ num2;
     console.log(calculated);
     result.innerHTML= num1+ " + " + num2+  " = " + calculated;

     if(calculated%2===0){ //cheks if result is an even number using modulo operator

         oddEven.innerHTML= "The result is an even number";
     }

     else{

         oddEven.innerHTML="The result is an odd number";
     }
    
    }


    if(selected===2){ //chekcs if substraction is chosen in select-box and calculates

        var calculated= num1- num2;
        console.log(calculated);
        result.innerHTML= num1+ " - " + num2+  " = " + calculated;
    
        if(calculated%2===0){ //cheks if result is an even number using modulo operator

            oddEven.innerHTML= "The result is an even number";
        }

        else{

            oddEven.innerHTML="The result is an odd number";
        }
       
       }


       if(selected===3){ //chekcs if multiply is chosen in select-box and calculates

        var calculated= num1*num2;
        console.log(calculated);
        result.innerHTML= num1+ " * " + num2+  " = " + calculated;
    
        if(calculated%2===0){ //cheks if result is an even number using modulo operator

            oddEven.innerHTML= "The result is an even number";
        }

        else{

            oddEven.innerHTML="The result is an odd number";
        }
       
       }


       if(selected===4){ //chekcs if division is chosen in select-box and calculates

        var calculated= Math.round((num1/ num2)*100)/100;
        console.log(calculated);
        result.innerHTML= num1+ " / " + num2+  " = " + calculated;
    
        if(calculated%2===0){ //cheks if result is an even number using modulo operator

            oddEven.innerHTML= "The result is an even number";
        }

        else{

            oddEven.innerHTML="The result is an odd number";
        }
       
       }


}