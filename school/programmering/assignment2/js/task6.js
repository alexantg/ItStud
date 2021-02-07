window.onload = startUp;


//runs function startup at window onload

function startUp() {

    var btn = document.getElementById("btn");

    btn.onclick = print;

}

//uses input value as parameter and returns boolean value based on if the number is prime or not

function isPrime(number) {

    var number = parseInt(document.getElementById("input").value);

    //starting loop from i=2 and up to number because we know it already can be divided by itself and one.

    for (var i = 2; i < number; i++) {

        if (number < 0) {
            return false;
        } 
        else if (number === 1) {
            return false;
        }
         else if (number === 2) {
            return true;
        }

        //using modulo to dermit if the number is an even number (even numbers cannot be prime)

         else if (number % i === 0) {
            return false;
        }

    }

    
    return true;


}

//prints value of isPrime function /boolean values

function print() {

    var print = document.getElementById("result");

    print.innerHTML = isPrime();

}