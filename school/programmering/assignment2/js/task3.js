window.onload = startUp;

function startUp() {
	var btn = document.getElementById("btn");

	btn.onclick = alert;
}

//calculates the circle area based on what radius is given as parameter. Parameter (radius) is the value given in input


function calcAreaByRadius(radius) {

	var radius = parseInt(document.getElementById("input").value);


	var area = ((Math.PI) * (radius*radius)).toFixed(2);

	if (radius < 0) {

		return undefined
	} 

	else if (radius > 0) {

		return area;
	}

}

//prints the value of alert function// either true or false//


function alert() {

	var print = document.getElementById("output");

	print.innerHTML = calcAreaByRadius();
	
}