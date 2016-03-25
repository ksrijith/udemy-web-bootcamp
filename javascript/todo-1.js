var lis = document.querySelectorAll('li');
for (var i=0; i<lis.length; i++){
	lis[i].addEventListener('mouseover', function(e) {
		this.classList.add("selected");
	});
	lis[i].addEventListener('mouseout', function(e) {
		this.classList.remove("selected");
	});
	lis[i].addEventListener('click', function(e) {
		this.classList.toggle("done");
	});
}