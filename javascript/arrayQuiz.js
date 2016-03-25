function printReverse(arr){
	for (i=arr.length-1; i>=0 ; i--){
		console.log(arr[i]);
	}
}

printReverse([1, 2, 3, 4, 5, 6]);

printReverse(["a", "b", "c", "d", "e", "f"]);

function isUniform(arr) {
	var val = arr[0];
	var check = true;
	for (var i=0; i<arr.length; i++) {
		var value = arr[i];
		if (value !== val) {
			check = false;
			break;
		}
	}
	console.log(check);
}

isUniform([1,1,1,1,1]);
isUniform([1,2,1,1,1,1]);

function sumArray(arr) {
	var sum = 0;
	arr.forEach(function(value){
		sum = sum + value;
	});
	console.log ("Sum: " + sum);
}

sumArray([1,2,3]);
sumArray([10,3,10,4]);
sumArray([-5,100]);

function maxVal(arr) {
	var max = arr[0];
	arr.forEach (function(value){
		if (max <= value) {
			max = value;
		}
	});

	console.log(max);
}

maxVal([1,2,3]);
maxVal([10,3,10,4]);
maxVal([-5,100]);