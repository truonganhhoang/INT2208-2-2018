var inputSearch = document.getElementById("keyword");

$(document).ready(function(){
    inputSearch.onkeydown = function(event){
  		if (event.keyCode == 13){
        if(inputSearch.value == ""){
          alert("Please enter key word");
        }
        else {
          sessionStorage.setItem("Keyword", inputSearch.value);
          window.location.href = "pages/searchresult.html";
        }
  		}
    }
    document.getElementById("search-button").onclick = function () {
      if(inputSearch.value == ""){
        alert("Please enter key word");
      }
      else {
        sessionStorage.setItem("Keyword", inputSearch.value);
        window.location.href = "pages/searchresult.html";
      }
    }
    $(".main-video").hover(function(){
      sessionStorage.setItem("Keyword", "Masew");
      sessionStorage.setItem("VideoId", "EV-91JV4Fws");
    });
    $("#sub1").hover(function(){
      sessionStorage.setItem("Keyword", "How i met your mother");
      sessionStorage.setItem("VideoId", "sCUEc7ZGGeU");
    });
    $("#sub2").hover(function(){
      sessionStorage.setItem("Keyword", "Rap việt");
      sessionStorage.setItem("VideoId", "xLYN94jkiDo");
    });
    $("#sub3").hover(function(){
      sessionStorage.setItem("Keyword", "Mc Ill");
      sessionStorage.setItem("VideoId", "s9-exVFzz14");
    });
    $("#sub4").hover(function(){
      sessionStorage.setItem("Keyword", "Ngọt");
      sessionStorage.setItem("VideoId", "1u0ygl9vJHI");
    });
});


