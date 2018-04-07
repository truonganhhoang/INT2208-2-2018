var inputSearch = document.getElementById("keyword");
loadvideo(localStorage.getItem("Keyword"));
document.title = "Result for " + localStorage.getItem("Keyword");


$(document).ready(function () {
    document.getElementById("keyword-display").innerHTML = '"' + localStorage.getItem("Keyword") + '"';
    inputSearch.onkeydown = function (event) {
        if (event.keyCode == 13) {
            loadvideo(inputSearch.value);
            document.getElementById("keyword-display").innerHTML = '"' + inputSearch.value + '"';
            localStorage.setItem("Keyword", inputSearch.value);
        }
    }
    document.getElementById("search-button").onclick = function () {
        loadvideo(inputSearch.value);
    }
});

function loadvideo(keyword) {
    $.ajax({
        url: "https://content.googleapis.com/youtube/v3/search?q=" + keyword + "&type=video&videoEmbeddable=true&videoSyndicated=true&maxResults=12&part=snippet&key=AIzaSyBAuMv7-ua5tGsDzL6TrY9k6v3o1PtTYus",
        type: 'GET',
        success: function (response) {
            console.log("Success");
            var htmlContent = "";
            for (var i = 0; i < response.items.length; i++) {
                if (response.items[i].id.kind == 'youtube#channel') {
                    continue;
                }
                var videoId = response.items[i].id.videoId;
                var videoTitle = response.items[i].snippet.title;
                var videoDescription = response.items[i].snippet.description;
                var videoThumbnail = response.items[i].snippet.thumbnails.medium.url;
                var thumbnailHeight = response.items[i].snippet.thumbnails.medium.height;
                var thumbnailWidth = response.items[i].snippet.thumbnails.medium.width;


                htmlContent += '       <div class="row">';
                htmlContent += '            <div class="col-lg-4 ">';
                htmlContent += '                <a href="watch.html" onclick="videoNavigator(\''+ videoId +'\')">';
                htmlContent += '                    <div class="sub-container">';
                htmlContent += '                      <img class="img-fluid image" src="' + videoThumbnail + '" alt="" width = "'+thumbnailWidth+'" height="'+thumbnailHeight+'">';
                htmlContent += '                      <div class="middle">';
                htmlContent += '                      <img src="../img/white-play.png" width="40" height="40" alt="media-play">';
                htmlContent += '                      </div>';
                htmlContent += '                    </div>';
                htmlContent += '                </a>';
                htmlContent += '            </div>';
                htmlContent += '            <div class="col-md-6">';
                htmlContent += '           <a href="watch.html" id="video-title-navigator" onclick="videoNavigator(\''+videoId+'\')"><h3>' + videoTitle + '</h3></a>';
                htmlContent += '           <p>' + videoDescription + '</p>';
                htmlContent += '           </div>';
                htmlContent += '       </div>';

                htmlContent += '       <hr>';


            }
            document.getElementById("list-video").innerHTML = htmlContent;
        },
        error: function () {
            console.log("Fail");
        }
    });
}

function videoNavigator(videoId){
    localStorage.setItem("VideoId", videoId);
}
