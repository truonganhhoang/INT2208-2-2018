//alert("Hi");

window.onload=function(){
    var min = 90;
    var sec = 0;
    setInterval(function(){
	   	if (min != 0 || sec !=0){
	        document.getElementsByTagName("h3")[0].innerHTML = "Thời gian làm bài còn "+ min +":" + sec ;
	        sec-=1;
	        if(min>0){
		       	if(sec < 0){
		       		min-=1;
			        sec = 59;
			    }		
		    }
	    }
	    else{
		    document.getElementsByTagName("body")[0].innerHTML = "<h1> Đã hết giờ làm bài</h1>";         
	    }
    },1000);
}


function render(){
	document.getElementsByTagName("body")[0].innerHTML = "<header>"+
	"</header>"+
	"<div>"+
	"</div>"+
	"<footer>"+
	"</footer>";
	getHeader();
	renderQuest(20);
	//getFooter();
}


function getHeader(){
	document.getElementsByTagName("header")[0].innerHTML = "<div>"+
		"<h1>Bài thi giữa kỳ II - 2018</h1>"+
		"<h2>Môn học Công Nghệ phần mềm</h2>"+
		"<br>"+
		"<h3></h3>"+
		"</div>";
	
}

function renderQuest(a){
	var i = 1;
	var list = "<form action=\"submited.html\">";
	//console.log("Here");
	for (;i<=a;i++){
		list = list + "<div id=\""+i+"\"></div>";
	}
	i=1;
	list += "<input type=\"submit\" value=\"Nộp bài\"></form>";
	document.getElementsByTagName("div")[1].innerHTML = list;
	for(;i<=a;i++){
		var s = getQuest(i);
		document.getElementById(i.toString()).innerHTML = s;

	}
	//uncheckedAll();
}
/*
function uncheckedAll(){
	var i =1;
	for(;i<=20;i++){
		var a = document.getElementsByName("choice"+i.toString())[0].checked;
		a=false;
		console.log(a);

	}
}
*/
function getQuest(a){
	 return "Câu "+a+": Trái đất có hình gì:<br>"+
	 		//"<input type=\"radio\" name=\"choice"+a+"\" style=\"display:none\" value=\"N/A\"><br>"+
			"<input type=\"radio\" name=\"choice"+a+"\"  value=\"A\">Tròn<br>"+
			"<input type=\"radio\" name=\"choice"+a+"\"  value=\"B\">Vuông<br>"+
			"<input type=\"radio\" name=\"choice"+a+"\"  value=\"C\">Méo<br>"+
			"<input type=\"radio\" name=\"choice"+a+"\"  value=\"D\">Dài<br>"
			;
}
/*
function getFooter(){
		
		var s = genFooter();
		document.getElementsByTagName("footer")[0].innerHTML = "<br><br>"+s;
	
}

function updateAnswer(a,v){
	var a = document.getElementsByName("choice"+i.toString())[0].value = v;
	console.log(a);
	//getFooter();
}

function genFooter(){
	var i = 1;
	var seq = "<h5>Các đáp án bạn đã chọn là:</h5><br>";
	for(;i<=20;i++){
		var a=document.getElementsByName("choice"+i.toString())[0].value;
		console.log(a);
		seq += i.toString() +"."+a+" ";
	}
	return seq;
}
*/