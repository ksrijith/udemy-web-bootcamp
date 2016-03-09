// create Secret Number
var secretNo = 4;
var guess = -1 * secretNo;
while(guess !== secretNo) {
	guess = Number(prompt("Guess a Number:"));
	if (guess===secretNo){
		alert("You guessed correctly!!");
		break;
	} else {
		if (guess > secretNo) {
			alert ("This is greater than secret number ");
		} else if (guess < secretNo){
			alert ("This is smaller than secret number ");
		} else {
			alert ("You got it right!!");
		}
	}
}