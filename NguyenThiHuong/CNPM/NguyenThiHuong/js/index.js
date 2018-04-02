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
    $(".main-video").hover(function(){
      localStorage.setItem("Keyword", "VŨ");
      localStorage.setItem("VideoId", "OjeYG1SyjTk");
    });
    $("#sub1").hover(function(){
      localStorage.setItem("Keyword", "Andiez");
      localStorage.setItem("VideoId", "o5IXgZVmV6U");
    });
    $("#sub2").hover(function(){
      localStorage.setItem("Keyword", "Karik");
      localStorage.setItem("VideoId", "H3OinT6Zrgc");
    });
    $("#sub3").hover(function(){
      localStorage.setItem("Keyword", "Karik");
      localStorage.setItem("VideoId", "HFUcWEiIRbk");
    });
    $("#sub4").hover(function(){
      localStorage.setItem("Keyword", "Karik");
      localStorage.setItem("VideoId", "Dd2sejzKV8s");
    });
});
