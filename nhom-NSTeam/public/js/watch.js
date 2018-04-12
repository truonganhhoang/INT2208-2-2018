var inputSearch = document.getElementById("keyword");
var videoFrame = document.getElementById("video-frame");
var localStorageKeyword = localStorage.getItem("Keyword");
var maxResults = 12;
$(document).ready(function () {
  inputSearch.setAttribute("value", localStorageKeyword);
  var videoId = localStorage.getItem("VideoId");

  showVideo(videoId);
  // loadRelatedVideo(localStorageKeyword, videoId);
  inputSearch.onkeydown = function (event) {
    if (event.keyCode == 13) {
      localStorage.setItem("Keyword", inputSearch.value);
      window.location.href = "searchresult.html";
    }
  }
  document.getElementById("search-button").onclick = function () {
    localStorage.setItem("Keyword", inputSearch.value);
    window.location.href = "searchresult.html";
  }
});

function showVideo(videoId){
  $.ajax({
    url : 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+ videoId + '&key=AIzaSyBAuMv7-ua5tGsDzL6TrY9k6v3o1PtTYus',
    type: 'GET',
    success : function(response){
      console.log("Access Complete");
      var videoTitle = response.items[0].snippet.title;
      var videoDescription = response.items[0].snippet.description;
      var channel = response.items[0].snippet.channelTitle;
      var videoDescriptionEdited = videoDescription.replace(/\n/g,"<br>");
      $("#video-title").text(videoTitle);
      $("#video-description").html(videoDescriptionEdited);
      $("#channel-title").text(channel);
    }
  });
  videoFrame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
  loadRelatedVideo(localStorageKeyword, videoId);
}

function loadRelatedVideo(keyword, videoIdWatching){
  $.ajax({
    url: "https://content.googleapis.com/youtube/v3/search?q=" + keyword + "&type=video&videoEmbeddable=true&videoSyndicated=true&maxResults="+maxResults+"&part=snippet&key=AIzaSyBAuMv7-ua5tGsDzL6TrY9k6v3o1PtTYus",
    type:'GET',
    success : function(response){
      var videoRelatedHTMLContent = "";
      for(var i = 0 ; i < 10 ; i++) {
        if (response.items[i].id.kind == 'youtube#channel') {
            continue;
        }
        var videoId = response.items[i].id.videoId;
        if(videoId != videoIdWatching){
          var videoTitle = response.items[i].snippet.title;
          var videoDescription = response.items[i].snippet.description;
          var videoThumbnail = response.items[i].snippet.thumbnails.medium.url;

          videoRelatedHTMLContent+=' <a href="#" onclick = showVideo(\'' + videoId +'\')>';
          videoRelatedHTMLContent+='  <img class="img-fluid" src="'+ videoThumbnail +'" alt="">';
          videoRelatedHTMLContent+='  <h6 class="text-center related-video-title">'+videoTitle+'</h6>';
          videoRelatedHTMLContent+=' </a>';
          videoRelatedHTMLContent+=' <hr>';

        }
      }
      document.getElementById("related-videos").innerHTML = videoRelatedHTMLContent;
    }
  })
}
