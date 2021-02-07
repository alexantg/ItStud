window.onload = draw;

function draw() {

    var symbol = "*";
    var emptySymbol = "";
    var print = document.getElementById("text");

    //outer loop controls how many rows that should appear

    for (i = 0; i < 8; i++) {
      
        //inner loop controls how many charachters that should be printed for each row

        for (j = 0; j <=(i*2); j++) {

            emptySymbol += symbol;
            print.innerHTML += symbol;
        }

        print.innerHTML += "<br>"

        console.log(emptySymbol);

    }
}