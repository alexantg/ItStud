window.onload = startUp;


//runs function fileHandle when input changes (at file upload) 

function startUp() {
    let input = document.getElementById("file");
    let select = document.getElementById("select");

    input.addEventListener("change", fileHandle);
    select.addEventListener("change", displayCity);


}

//gets the file that triggered the event, reads it as text and stores it in a variable as a string// 


function fileHandle(event) {

    let file = event.target.files[0];

    let fileReader = new FileReader();

    fileReader.onload = storeFile;

    fileReader.readAsText(file);
}

//first line stores the data-content as string. Then splits then string into an array where each index contains all the info
//loops through and provides code so that each index in array will contain a new array splitted at ",". Arr is then a 2D array


function storeFile(event2) {

    let string = event2.target.result;


    arr = string.split("\n");


    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(",");
    }

    arr = arr;

    pushCityInfo(arr);
    statsLocation(arr);


}

//finds the total amount by looping through and adding each amount to the total amount. Then divides it by the array-lengt to find average//

function total(arr, field) {

    let total = 0;

    for (i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i][field]);
    }

    total = total.toFixed(0);



    return total;
}

//function takes an array and field (in the 2d array) as arguments and pushes the amounts at that field into a new array.
//the math.max function returns the highest value

function max(arr, field) {

    let transaction = new Array();
    let max;

    for (let i = 0; i < arr.length; i++) {
        transaction.push(arr[i][field]);
    }

    max = Math.max(...transaction);

    return max;


}

//function takes an array and field (in the 2d array) as arguments and pushes the amounts at that field into a new array.
//the math.min function returns the highest value

function min(arr, field) {

    let transaction = new Array();
    let min;

    for (let i = 0; i < arr.length; i++) {
        transaction.push(arr[i][field]);
    }

    min = Math.min(...transaction);

    return min;

}

//finds the total amount by looping through and adding each amount to the total amount. Then divides it by the array-lengt to find average//

function average(arr, field) {

    let total = 0;

    for (i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i][field]);
    }

    avg = (total / arr.length).toFixed(0);

    return avg;
}


//the following functions return stats calculated on non-multidimensional arrays// nessesary because the initial functions calculates 
// the stats based on multidimensional arrays//

function max1(arr) {
    var max = Math.max(...arr);

    return max
}

function min1(arr) {
    let min = Math.min(...arr);

    return min;
}

function avg1(arr) {
    let total = 0;
    let avg;

    for (i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i]);
    }
    avg = (total / arr.length).toFixed(0);
    return avg;
}

function total1(arr) {
    let total = 0;

    for (i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i]);
    }

    total = total.toFixed(0);

    return total;
}

//pushes every bit of info regarding each location into respective arrays, then turns them into 2D arrays

function pushCityInfo(arr) {

    tempHaldenArr = new Array();
    haldenArr = new Array();

    temOsloarr = new Array();
    osloArr = new Array();

    tempFrkstArr = new Array();
    frkstArr = new Array();

    tempStavArr = new Array();
    stavArr = new Array();



    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][2] === "Halden")
                tempHaldenArr.push(arr[i][j]);

            else if (arr[i][2] === "Oslo")
                temOsloarr.push(arr[i][j]);

            else if (arr[i][2] === "Fredrikstad")
                tempFrkstArr.push(arr[i][j]);

            else if (arr[i][2] === "Stavanger")
                tempStavArr.push(arr[i][j]);

        }



    }

    //sets new arrays to be 2D arrays, because the arrayTo2D returns a 2d array
    //this is done in order to run the original table-making functions, because these take 2D arrays as arguments


    haldenArr = arrayTo2D(tempHaldenArr, 4);
    osloArr = arrayTo2D(temOsloarr, 4);
    frkstArr = arrayTo2D(tempFrkstArr, 4);
    stavArr = arrayTo2D(tempStavArr, 4);



}

//function checks wich city is chosen and runs the table-generating function for each array of information//

function displayCity() {

    let chosen = document.getElementById("select").value;

    if (chosen === "All") {

        displayData(arr);
        displayStats(chosen)

    } else if (chosen === "Halden") {

        displayData(haldenArr);
        displayStats(chosen)


    } else if (chosen === "Fredrikstad") {

        displayData(frkstArr)
        displayStats(chosen)


    } else if (chosen === "Oslo") {
        displayData(osloArr)
        displayStats(chosen)

    } else if (chosen === "Stavanger") {
        displayData(stavArr)
        displayStats(chosen)

    }

    draw();

}


//takes an array and a number as parameters, then returns a 2d array of the original array splitted up into how many elements you want in each sub-array

function arrayTo2D(arr, nmb) {

    var result = []

    input = arr.slice(0)
    while (arr[0]) {
        result.push(arr.splice(0, nmb))
    }
    return result
}




//function creates a new row in table for each index outer array. Then the inner loop itterates over the inner arrays and 
// sets the text content of the row to be the content of each column in the 2d array



function displayData(arr) {

    let table = document.getElementById("table");

    table.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {

        let tr = document.createElement("tr");
        tr.textContent = i + 1;


        for (let j = 0; j < arr[i].length; j++) {

            let td = document.createElement("td");


            td.textContent = arr[i][j];

            tr.appendChild(td);

        }

        table.appendChild(tr);
    }

    return table;

}

//function draws a bar graph by using a  for-loop that itterates the array containing 
//the total amounts. Therefor the function will return as many bars as there is total amounts in the array
// the width is also changing every itteration in order to make the apear side by side
//the height is set to be the total-amount divided by 6

function draw() {

    let canvas = document.getElementById("drawing");
    let ctx = canvas.getContext("2d");
    let head = document.getElementById("heading");

    head.hidden = false;
    
    let totalArray = [total1(arrOslo), total1(arrHalden), total1(arrFredrikstad), total1(arrStavanger)];
    let labels = ["Oslo", "Halden", "Fredrikstad", "Stavanger"];

    
    var width = 65;
    var x = 50;
    var y = 540;

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "green";
    ctx.font = "0.8rem Arial";

    ctx.moveTo(0, 0);
    ctx.lineTo(0, 550);
    ctx.fillText("0", 3, 525);
    ctx.fillText("500", 3, 400);
    ctx.fillText("1500", 3, 260);
    ctx.fillText("2500", 3, 100);
    ctx.stroke();
    

    for (var i = 0; i < totalArray.length; i++) {
        var h = totalArray[i] / 6;

        ctx.fillText(labels[i], x, y);
        ctx.fillRect(x, canvas.height - h - 30, width, h);
        x += width + 70;
    }
}

//takes an array as a parameter and loops over it. Then checks if either of the elements is one of the location 
// and chekcs if the array element is either of the locations and pushes the amounts into a new (global array)

function statsLocation(arr) {

    //defines a number of global arrays so they can be used in the display-stats function 

    arrOslo = new Array();
    arrHalden = new Array();
    arrFredrikstad = new Array();
    arrStavanger = new Array();



    //checks if array element is given location, and pushes amounts for that specific location into a new array//

    for (let i = 0; i < arr.length; i++) {

        if (arr[i][2] === "Oslo") {
            arrOslo.push(parseInt(arr[i][3]));

        } else if (arr[i][2] === "Halden") {
            arrHalden.push(parseInt(arr[i][3]));

        } else if (arr[i][2] === "Fredrikstad") {
            arrFredrikstad.push(parseInt(arr[i][3]));

        } else if (arr[i][2] === "Stavanger") {
            arrStavanger.push(parseInt(arr[i][3]));
        }

    }



}

//defines a number of arrays, containing each stat for each location and transaction type
//the function takes the chosen variable as an argument, and then creates a table containing 
// the matching stats


function displayStats(chosen) {

    let table = document.getElementById("table2");
    table.hidden = false;



    //defines arrays for each locations containing all stats. Arrays are used as content in table

    let allArray = [total(arr, 3), max(arr, 3), min(arr, 3), average(arr, 3)];
    let haldenArray = [total1(arrHalden), max1(arrHalden), min1(arrHalden), avg1(arrHalden)];
    let osloArray = [total1(arrOslo), max1(arrOslo), min1(arrOslo), avg1(arrOslo)];
    let frkstArray = [total1(arrFredrikstad), max1(arrFredrikstad), min1(arrFredrikstad), avg1(arrFredrikstad)];
    let stavArray = [total1(arrStavanger), max1(arrStavanger), min1(arrStavanger), avg1(arrStavanger)];
    let stats = ["Total", "Max", "Min", "Average"]

    //the first tabel-row is defined in the HTML code, in order to get a proper layout
    //outer loop makes the table rows

    table.innerHTML = "";



    var tr = document.createElement("tr");
    var tr2= document.createElement("tr");

    for (let i = 0; i < allArray.length; i++) {


        var td1= document.createElement("td");

        td1.textContent= stats[i];

        tr.appendChild(td1);

        //   inner loop makes the columns, and fills them with stats based on what location is chosen

        for (let j = 0; j < 1; j++) {

            var td = document.createElement("td");


            if (chosen === "All") {

                td.innerHTML = allArray[i];


            } else if (chosen === "Halden") {
                td.innerHTML = haldenArray[i];


            } else if (chosen === "Oslo") {
                td.innerHTML = osloArray[i];


            } else if (chosen === "Fredrikstad") {
                td.innerHTML = frkstArray[i];

            } else if (chosen === "Stavanger") {
                td.innerHTML = stavArray[i];


            }

            tr2.appendChild(td)
        }



        table.appendChild(tr);
        table.appendChild(tr2);

    }
}