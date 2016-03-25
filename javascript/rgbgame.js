function getColors(len){
	var colors = new Array();
	for (var i=0; i<len; i++){
		colors.push(getRandomColor());
	}

	return colors;
}

function getRandomColor() {
	var r = Math.floor((Math.random() * 255) + 1); 
	var g = Math.floor((Math.random() * 255) + 1); 
	var b = Math.floor((Math.random() * 255) + 1); 
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

function getNewGoal() {
	return colors[Math.floor((Math.random() * colors.length))];
}

function configSquare(square){
	square.style.background = colors[i];
	square.addEventListener('click', function(e) {
		var clickedColor = this.style.backgroundColor.toUpperCase();
		if(clickedColor === goalColor.toUpperCase()) {
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.background="#232323";
			messageDisplay.textContent = 'Try Again';
		}
	});
}

function changeColor(color) {
	messageDisplay.textContent = 'Correct';
	for (var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

var colors = getColors(6);
var goalColor = getNewGoal();
var h1 = document.querySelector('h1');
var messageDisplay = document.querySelector('#message');
document.querySelector('#selcolor').textContent = goalColor;
console.log("New Goal: " + goalColor);
var squares = document.querySelectorAll('.square');
for (var i=0; i<squares.length; i++){
	configSquare(squares[i]);
}
