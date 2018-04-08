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
    $(".main-video").hover(function () {
      localStorage.setItem("VideoId", "alDEI0WyZcA");
      localStorage.setItem("Keyword", "Phim Conan");
    });
    $("#sub1").hover(function(){
      localStorage.setItem("VideoId", "O6i_k0h6tKo");
      localStorage.setItem("Keyword", "Barcelona");
    });
    $("#sub2").hover(function(){
      localStorage.setItem("VideoId", "D_QKKXLp_i4");
      localStorage.setItem("Keyword", "5S Online");
    });
    $("#sub3").hover(function(){
      localStorage.setItem("VideoId", "j__Q13iAxNk");
      localStorage.setItem("Keyword", "Soobin Hoàng Sơn");
    });
    $("#sub4").hover(function(){
      localStorage.setItem("VideoId", "1-Zee9ZJH7o");
      localStorage.setItem("Keyword", "Masew");
    });
});
