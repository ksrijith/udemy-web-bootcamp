var movieDb = [
	{
		name: "In Bruges",
		rating: 5,
		hasWatched: true
	},
	{
		name: "Frozen",
		rating: 4.5,
		hasWatched: false
	},
	{
		name: "Mad Max Fury Road",
		rating: 5,
		hasWatched: true
	},
	{
		name: "Les Miserables",
		rating: 3.5,
		hasWatched: false
	},

];

movieDb.forEach(function(movie){
	var result = getResult(movie);
	console.log(result);
});

function getResult(movie) {
	var result = "You have"
	if (movie.hasWatched) {
		result += " watched ";
	} else {
		result += " not seen ";
	}
	result += "\"" + movie.name +"\" - " + movie.rating +" stars";
	return result;
}