var age = prompt("Your Age: ");
var noOfDaysAlive = (age * 365) + (age - age%4)/4;
console.log("No of Days Alive: "+noOfDaysAlive);