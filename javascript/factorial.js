var factorial = function(n) {
	var result = 1;
	if (n<=0) { 
		return result;
	}
	result = n * factorial(n - 1);
	return result;
}