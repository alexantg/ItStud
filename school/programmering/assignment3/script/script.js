window.onload = startUp;


//runs function fileHandle when input changes (at file upload) 

function startUp() {
    let input = document.getElementById("file");

    input.addEventListener("change", fileHandle);

}

//TASK 2//   //get the file that triggered the event, reads it as text and stores it in a variable as a string// 


function fileHandle(event) {

    let file = event.target.files[0];

    let fileReader = new FileReader();

    fileReader.onload = storeFile;

    fileReader.readAsText(file);
}

//first line stores the data-content as string. Then splits then string into an array where each index contains all the info
//loops through and provides code so that each index in array will contain a new array splitted at ",". Arr is then a 2D array

//task3

function storeFile(event2) {

    let string = event2.target.result;

    arr = string.split("\n");

    // console.log(rowArr);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(",");
    }


    main(arr);

}

//this function prints nessesary stats, and calls nessesary functions

function main(arr) {

    let print1 = document.getElementById("countLoc");
    let print2 = document.getElementById("countType");
    let print3 = document.getElementById("countDays");

    print1.innerHTML = "Number of locations: " + numberOfLocatins(arr, 2)
    print2.innerHTML = "Number of transaction types: " + numberOfTypes(arr, 1)
    print3.innerHTML = "Number of days: " + duration(arr, 0);

    displayData(arr);

    statsType(arr);
    statsLocation(arr);

    displayStats(arr);



}

//loops through the array and adds each amount to the total amount

function total(arr, field) {

    let total = 0;

    for (i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i][field]);
    }

    total = total.toFixed(0);



    return total;
}

//finds the total amount by looping through and adding each amount to the total amount. Then divides it by the array-lengt to find average//

function avg(arr, field) {

    let total = 0;

    for (i = 0; i < arr.length; i++) {
        total += parseFloat(arr[i][field]);
    }

    avg = (total / arr.length).toFixed(0);

    return avg;
}

//pushes loops through the 2D array rows and pushes the amounts into a new array in order to do calculations

function max(arr, field) {

    let transaction = new Array();
    let max;

    for (let i = 0; i < arr.length; i++) {
        transaction.push(arr[i][field]);
    }

    max = Math.max(...transaction);

    return max;


}

//pushes loops through the 2D array rows and pushes the amounts into a new array in order to do calculations

function min(arr, field) {

    let transaction = new Array();
    let min;

    for (let i = 0; i < arr.length; i++) {
        transaction.push(arr[i][field]);
    }

    min = Math.min(...transaction);

    return min;

}


function numberOfLocatins(arr, field) {

    let count = 0;
    let tempArrLocation = new Array();


    for (let i = 0; i < arr.length; i++) {

        tempArrLocation.push(arr[i][field]);

    }

    //filter() runs the given function for each element in array. The function takes current and temp as parametes
    // the function only returns something if the current value is equal to the initial value, which means it will only
    //return duplicates

    locationArray = tempArrLocation.filter(function(current, temp) {
        return tempArrLocation.indexOf(current) === temp;
    });

    count = locationArray.length;

    return count;

}

function numberOfTypes(arr, field) {
    let count = 0;
    let tempArrType = new Array();

    for (let i = 0; i < arr.length; i++) {

        tempArrType.push(arr[i][field]);
    }

    typeArray = tempArrType.filter(function(current, temp) {
        return tempArrType.indexOf(current) === temp;
    })

    count = typeArray.length;

    return count;

}

//calculates the difference between the first and last day of transaction  // subtask 4.4//

function duration(arr, field) {

    let dateArray = new Array();

    for (let i = 0; i < arr.length; i++) {
        dateArray.push(arr[i][field]);
    }

    first = new Date(dateArray[field]);
    last = new Date(dateArray[dateArray.length - 1]);

    //calculates the difference in milliseconds
    differenceTime = last.getTime() - first.getTime();

    //calculates the difference in days by dividing with number of milliseconds in a day 
    differenceDays = Math.round(differenceTime / (1000 * 3600 * 24));

    return differenceDays;

}

//function creates a new row in table for each index outer array. Then the inner loop itterates over the inner arrays and 
// sets the text content of the row to be the content of each column in the 2d array

//task 5

function displayData(arr) {

    let table = document.getElementById("table");

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



function statsLocation(arr) {

    var arrOslo = new Array();
    var arrHalden = new Array();
    var arrFredrikstad = new Array();
    var arrStavanger = new Array();



    //checks if array element is given location, and pushes amounts for that specific location into a new array//

    for (let i = 0; i < arr.length; i++) {

        if (arr[i][2] === "Oslo") {
            arrOslo.push(parseInt(arr[i][3]));

            totalOslo = total1(arrOslo);
            maxOslo = max1(arrOslo);
            minOslo = min1(arrOslo);
            avgOslo = avg1(arrOslo);

        } else if (arr[i][2] === "Halden") {
            arrHalden.push(parseInt(arr[i][3]));

            totalHalden = total1(arrHalden);
            maxHalden = max1(arrHalden);
            minHalden = min1(arrHalden);
            avgHalden = avg1(arrHalden);


        } else if (arr[i][2] === "Fredrikstad") {
            arrFredrikstad.push(parseInt(arr[i][3]));

            totalFkst = total1(arrFredrikstad);
            maxFkst = max1(arrFredrikstad);
            minFkst = min1(arrFredrikstad);
            avgFkst = avg1(arrFredrikstad);

        } else if (arr[i][2] === "Stavanger") {
            arrStavanger.push(parseInt(arr[i][3]));

            totalStv = total1(arrStavanger);
            maxStv = max1(arrStavanger);
            minStv = min1(arrStavanger);
            avgStv = avg1(arrStavanger);
        }

    }



}


function statsType(arr) {

    var arrFood = new Array();
    var arrTransport = new Array();
    var arrEntertainment = new Array();

    //cheks if the array element is given transaction-type, and then pushes amounts for that location into a new array

    for (let i = 0; i < arr.length; i++) {

        if (arr[i][1] === "Food") {
            arrFood.push(arr[i][3]);

            totalFood = total1(arrFood);
            maxFood = max1(arrFood);
            minFood = min1(arrFood);
            avgFood = avg1(arrFood);


        } else if (arr[i][1] === "Entertainment") {
            arrEntertainment.push(arr[i][3]);

            totalEnt = total1(arrEntertainment);
            maxEnt = max1(arrEntertainment);
            minEnt = min1(arrEntertainment);
            avgEnt = avg1(arrEntertainment);
        } else if (arr[i][1] === "Transportation") {
            arrTransport.push(arr[i][3]);

            totalTransp = total1(arrTransport);
            maxTransp = max1(arrTransport);
            minTransp = min1(arrTransport);
            avgTransp = avg1(arrTransport);
        }

    }

}


function displayStats(arr) {

    let table = document.getElementById("table2");
    table.hidden = false;

    let totalArray = [total(arr, 3), totalOslo, totalHalden, totalFkst, totalStv, totalFood, totalEnt, totalTransp];
    let maxArray = [max(arr, 3), maxOslo, maxHalden, maxFkst, maxStv, maxFood, maxEnt, maxTransp];
    let minArray = [min(arr, 3), minOslo, minHalden, minFkst, minStv, minFood, minEnt, minTransp];
    let avgArray = [avg(arr, 3), avgOslo, avgHalden, avgFkst, avgStv, avgFood, avgEnt, avgTransp];
    let content = ["Total amount", "Max amount", "Min amount", "Average amount"];

    //the first tabel-row is defined in the HTML code, in order to get a proper layout
    //outer loop makes the table rows

    for (let i = 0; i < 4; i++) {
        let tr = document.createElement("tr");

        tr.textContent = content[i]

        //inner loop makes the columns, and fills them with stats

        for (let j = 0; j < totalArray.length; j++) {

            let td = document.createElement("td");


            if (i === 0) {
                td.innerHTML = totalArray[j];


            } else if (i === 1) {
                td.innerHTML = maxArray[j];


            } else if (i === 2) {
                td.innerHTML = minArray[j];


            } else if (i === 3) {
                td.innerHTML = avgArray[j];


            }

            tr.appendChild(td);

        }

        table.appendChild(tr);

    }
}