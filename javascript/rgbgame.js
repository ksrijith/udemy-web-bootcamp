
var squares = document.querySelectorAll('.square');
var h1 = document.querySelector('h1');
var messageDisplay = document.querySelector('#message');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');
var squareCount = 6;
var background = 'steelblue';
var colors = [];
var goalColor = '';

function getColors(len){
	var colors = [];
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

function getNewGoal(colors) {
	return colors[Math.floor((Math.random() * colors.length))];
}

function configSquare(square, color){
	square.style.background = color;
	square.style.display = "block";
	square.addEventListener('click', function(e) {
		this.removeEventListener('click', arguments.callee);
		var clickedColor = this.style.backgroundColor.toUpperCase();
		if(clickedColor === goalColor.toUpperCase()) {
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.background="RGB(35, 35, 35)";
			messageDisplay.textContent = 'Try Again';
		}
	});
}

function changeColor(color) {
	messageDisplay.textContent = 'Correct';
	resetButton.textContent = 'Play Again?';
	for (var i=0; i<squareCount; i++){
		squares[i].style.backgroundColor = color;
	}
}

function reset() {
	colors = getColors(squareCount);
	goalColor = getNewGoal(colors);
	document.querySelector('#selcolor').textContent = goalColor;
	for (var i=0; i<squares.length; i++){
		if (i<squareCount){
			configSquare(squares[i], colors[i]);
		} else {
			squares[i].style.display = "none";
		}
	}
	messageDisplay.textContent = '';
	h1.style.backgroundColor = background;
}

function unSelectAllModes() {
	for (var i=0; i< modeButtons.length; i++) {
		modeButtons[i].classList.remove('selected');
	}
}

function init() {
	for (var i=0; i< modeButtons.length ; i++){
		modeButtons[i].addEventListener('click',function(){
			this.textContent === 'Easy' ? squareCount = 3:squareCount = 6;
			reset();
			unSelectAllModes();
			this.classList.add('selected');
		});
	}

	resetButton.addEventListener('click', reset);
	reset();
}

init();