var inputSearch = document.getElementById("keyword");




$(document).ready(function(){

    loadvideo(localStorage.getItem("Keyword"));
    document.getElementById("keyword-display").innerHTML = '"'+ localStorage.getItem("Keyword") +'"';

    inputSearch.onkeydown = function(event){
		if (event.keyCode == 13){
            loadvideo(inputSearch.value);
            document.getElementById("keyword-display").innerHTML = '"'+ inputSearch.value +'"';
		}
    }
    
    document.getElementById("search-button").onclick = function(){
        loadvideo(inputSearch.value);
    }

    
    
});


function loadvideo(keyword){
    $.ajax({
        url : "https://content.googleapis.com/youtube/v3/search?q=" + keyword + "&type=video&videoEmbeddable=true&videoSyndicated=true&maxResults=12&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc",
        type : 'GET',
        success : function(response){
            console.log("Success");
            var htmlContent = "";
            for(var i = 0 ; i < response.items.length ; i++){
                if(response.items[i].id.kind == 'youtube#channel'){
                    continue;
                }
                var videoId = response.items[i].id.videoId;
                var videoTitle = response.items[i].snippet.title;
                var videoDescription = response.items[i].snippet.description;
                var videoThumbnail = response.items[i].snippet.thumbnails.medium.url;	
                
                
                htmlContent += '       <div class="row">';
                htmlContent += '            <div class="col-md-4">';
                htmlContent += '                <a href="watch.html">';
                htmlContent += '                    <img class="img-fluid rounded mb-3 mb-md-0" src="'+ videoThumbnail +'" alt="">';
                htmlContent += '                </a>';
                htmlContent += '            </div>';
                htmlContent += '            <div class="col-md-6">';
                htmlContent += '           <a href="watch.html"><h3>'+videoTitle+'</h3></a>';
                htmlContent += '           <p>'+ videoDescription +'</p>';
                htmlContent += '           </div>';
                htmlContent += '       </div>';

                htmlContent += '       <hr>';

                
            }
            document.getElementById("list-video").innerHTML = htmlContent;
        },
        error : function(){
            console.log("Fail");
        }
    });
}


