var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var max = document.getElementById('max');
var maxval = max.textContent;
var maxin = document.getElementById('maxin');
var p1c = document.getElementById('p1c');
var p2c = document.getElementById('p2c');
var reset = document.getElementById('reset');
var gameOver = false;
p1c.addEventListener('click', function(e) {
	upScore(p1);
});

p2c.addEventListener('click', function(e) {
	upScore(p2);
});
maxin.addEventListener('change', function(e) {
	if(Number(maxin.value) != 0){
		max.textContent = maxin.value;
		maxval = maxin.value;
	}
});

reset.addEventListener('click', function(e) {
	p1.textContent = '0';
	p2.textContent = '0';
	gameOver = false;
	p1.classList.remove("winner");
	p2.classList.remove("winner");
});

function upScore(pl){
	if (!gameOver) {
		var plsc = Number(pl.textContent);
		plsc = plsc + 1;
		pl.textContent = plsc;
		if (plsc === Number(maxval)) {
			pl.classList.toggle("winner");
			gameOver=true;
		}
	}
}