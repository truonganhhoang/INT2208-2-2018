var contents = document.getElementsByClassName("img");

for (var i = 0; i < contents.length; i++) {
	contents[i].addEventListener("click", function () {
		this.children[0].classList.toggle("d-none");
		this.children[1].classList.toggle("d-none");
	}
)}