var todos = new Array();
var action = "";
while (action !== "quit"){
	action = prompt("What would you like to do?");
	if (action === "new"){
		addTodo();
	} else if (action === "list") {
		listTodo();
	} else if (action === "delete") {
		deleteTodo();
	}
}
console.log("OK You Quit the App.");

function listTodo() {
	console.log("**************");
	todos.forEach(function(todo, index){
		console.log(index + ": " + todo);
	});
	console.log("**************");
}

function addTodo() {
	var todo = prompt ("Enter a new Todo: ");
	todos.push(todo);
	console.log("Todo Added Successfully!!");
}

function deleteTodo() {
	var loc = prompt ("Enter Index of Todo todo to delete");
	if (loc >= todos.length) {
		console.log("Invalid Index provided!!");
	} else {
		var removed = todos.splice(loc, 1);
		console.log("\"" + loc + ": " + removed + "\" removed from Todos");
	}
}