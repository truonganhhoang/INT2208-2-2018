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
      localStorage.setItem("Keyword", "Masew");
      localStorage.setItem("VideoId", "EV-91JV4Fws");
    });
    $("#sub1").hover(function(){
      localStorage.setItem("Keyword", "How i met your mother");
      localStorage.setItem("VideoId", "sCUEc7ZGGeU");
    });
    $("#sub2").hover(function(){
      localStorage.setItem("Keyword", "Rap việt");
      localStorage.setItem("VideoId", "xLYN94jkiDo");
    });
    $("#sub3").hover(function(){
      localStorage.setItem("Keyword", "Mc Ill");
      localStorage.setItem("VideoId", "s9-exVFzz14");
    });
    $("#sub4").hover(function(){
      localStorage.setItem("Keyword", "Ngọt");
      localStorage.setItem("VideoId", "1u0ygl9vJHI");
    });
});
