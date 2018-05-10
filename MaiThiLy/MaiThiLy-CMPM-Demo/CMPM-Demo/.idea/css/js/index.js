var inputSearch = document.getElementById("keyword");

$(document).ready(function(){
    inputSearch.onkeydown = function(event){
  		if (event.keyCode == 13){
              localStorage.setItem("Keyword", inputSearch.value);
              window.location.href = "pages/searchresult.html";
  		}
    }
    document.getElementById("search-button").onclick = function () {
      localStorage.setItem("Keyword", inputSearch.value);
      window.location.href = "pages/searchresult.html";
    }
});
