window.onload = startUp;


//defines variable button and adds event: onclick//

function startUp() {
    var btn = document.getElementById("check");

    btn.addEventListener("click", check);
}

//checks if username and password are the same//

function check() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var passArr = password.split("");

    console.log(passArr.length);


    if (username === password) {
        alert("Username and password can not be the same")
        location.reload();
    } else {
        passCheck();
    }

}

//runs a number of if-test to check if password checks out with standards given in the task//

function passCheck() {

    var password = document.getElementById("password").value;

    //a number of regular expressions

    var digit = /\d/g;
    var special = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;

    //using the regular expressions to match for any of them in the password string 

    var resultDigit = password.match(digit);
    var resultSpecial = password.match(special);
    var resultUpper = password.match(upperCase);
    var resultLower = password.match(lowerCase)


 // a number of if-tests that checks if password matches given criterias

    if (password.length < 8) {
        alert("Password must be atleast 8 charahters")

    } else if (password.length > 32) {
        alert("Password can not exceed 32 characters")

    } else if (resultDigit === null) {
        alert("please include a number in password");

    } else if (resultSpecial === null) {
        alert("Please include a special charachter in password")

    } else if (resultUpper === null) {
        alert("Password must contain atleast one uppercase letter")

    } else if (resultLower === null) {
        alert("Password must contain atleast one lowercase letter")
    } else {
        alert("Welcome to the page!")
        location.reload();
    }




}