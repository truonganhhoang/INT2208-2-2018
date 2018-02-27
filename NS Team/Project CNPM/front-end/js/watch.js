var inputSearch = document.getElementById("keyword");

$(document).ready(function(){
    inputSearch.onkeydown = function(event){
		if (event.keyCode == 13){
            localStorage.setItem("Keyword", inputSearch.value);
            window.location.href = "searchresult.html";
		}
    }
});
