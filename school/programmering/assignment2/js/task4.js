
 window.onload=startup;

  //runs function startup at window onload

 function startup(){
    
     var btnPort1= document.getElementById("btn1");
     var btnPort2= document.getElementById("btn2");

     btnPort1.onclick= print1;
     btnPort2.onclick= print2;

 }

 //Cheks what the input values are, and defines a and b. Uses a and b in the XOR-expression and returns value

function port1 (a,b){


    var bool1= document.getElementById("bool1").value;
    var bool2= document.getElementById("bool2").value;

    
    if(bool1==="true"){
        var a=true;
    }

   else if(bool1==="false"){
        var a=false;
    }

    if(bool2==="true"){
        var b=true;
    }

   else if(bool2==="false"){
        var b=false;
    }


    if( (a&&!b)|| (!a&&b)===true ) {

        return true; 

    }

    else{
        return false;
    }
}

 //Cheks what the input values are, and defines a and b. Uses a and b in the XOR-expression and returns value

function port2 (a,b){

    var bool1= document.getElementById("bool11").value;
    var bool2= document.getElementById("bool22").value;


    if(bool1==="true"){
        var a=true;
    }

   else if(bool1==="false"){
        var a=false;
    }

    if(bool2==="true"){
        var b=true;
    }

   else if(bool2==="false"){
        var b=false;
    }


    if( (a||b) && !(a&&b)===true ) {

        return true; 

    }

    else{
        return false;
    }
}


    //prints the return value of the first function

function print1(){

    var print= document.getElementById("print1");

     print.innerHTML= port1();

    

}

    //prints the return value of the second function\

function print2(){

    var print= document.getElementById("print2");

     print.innerHTML= port2();

    

}















    






