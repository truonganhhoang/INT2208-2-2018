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
      localStorage.setItem("Keyword", "Nhạc Trung Quốc");
      localStorage.setItem("VideoId", "EocQte4FYAo");
    });
    $("#sub1").hover(function(){
      localStorage.setItem("Keyword", "Phan Mạnh Quỳnh");
      localStorage.setItem("VideoId", "7K3tW1tWIro");
    });
    $("#sub2").hover(function(){
      localStorage.setItem("Keyword", "Mỹ Tâm");
      localStorage.setItem("VideoId", "wyu0YvIQmVY");
    });
    $("#sub3").hover(function(){
      localStorage.setItem("Keyword", "Da LAB");
      localStorage.setItem("VideoId", "AmvA-XJF0j8");
    });
    $("#sub4").hover(function(){
      localStorage.setItem("Keyword", "Phan Mạnh Quỳnh");
      localStorage.setItem("VideoId", "EUEUZDV-in0");
    });
});
