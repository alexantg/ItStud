window.onload = startUp; //runs function startup when page loads


var list = []; //defines the array that holds the added items

function startUp() { // runs different functions on button onclick

    var btnAdd = document.getElementById("add");
    var btnUndo = document.getElementById("undo");
    var btnRemove = document.getElementById("remove");


    btnAdd.addEventListener("click", addElement);
    btnUndo.addEventListener("click", undo);
    btnRemove.addEventListener("click", remove);


}

//adds another element to array by using list.push

function addElement() {

    var input = document.getElementById("input").value;

    if (input === "") {
        alert("Please add an item to list")
        location.reload;
    } else {

        list.push(input.split("."));

        updateList();
        updateInfo();

    }

}

//updates printed list of array elements, shows index and what element is at that index

function updateList() {

    var print = document.getElementById("printElements");
    var listed = "";
    print.innerHTML = "";

    for (i = 0; i < list.length; i++) {
        listed += i + ":" + list[i] + "<br>";
    }

    print.innerHTML += listed;

}

//updates info-section. Gets first item, number of elements in array, and last element in array// 

function updateInfo() {

    var first = list[0];
    var sumItems = list.length;
    var last = list[list.length - 1];

    var printInfo = document.getElementById("printInfo");

    printInfo.innerHTML = "First item: " + first + "<br>" + "Number of items: " + sumItems + "<br>" + "Last item; " + last;
}


//removes element at index chosen by using splice, and input value as which index to remove

function remove() {

    var index = parseInt(document.getElementById("removeIndex").value);


    if (list[index] === undefined) {
        alert("This element do not exist");
    } else {

        list.splice(index, 1);

        updateList();
        updateInfo();
    }

}

//removes last element at array by using splice

function undo() {

    if (list.length < 1) {
        alert("No elements to undo");
    } else {

        list.splice(-1, 1);

        updateList();
        updateInfo();

    }
}