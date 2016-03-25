var body = document.querySelector('body');
var isBlue = false;
var r=1;
var g=2;
var b=3;
var rv = false;
var gv = false;
var bv = false;
setInterval(function() {
	body.style.background = "rgb(" + r + ", "+ g + ", " + b + ")"; 
	if (rv) {
		r+=2;
	} else {
		r-=2;
	}
	if (gv) {
		g+=4;
	} else {
		g-=4;
	}
	if (bv) {
		b+=6;
	} else {
		b-=6;
	}

	if (b>=255){
		bv = false;
	} else if (b <= 0) {
		bv = true;
	}
	if (g>=255){
		gv = false;
	} else if (g <= 0) {
		gv = true;
	}
	if (r>=255){
		rv = false;
	} else if (r <= 0) {
		rv = true;
	}
}, 10);