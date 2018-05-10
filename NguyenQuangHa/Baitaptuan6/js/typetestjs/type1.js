//alert("Hi");

window.onload=function(){
	renderMon("Kiến trúc máy tính","Bài thi môn học: Kỳ 1 - 2018");
	renderList(7);
	renderQuest(7);
	getQuest(7);
    var min = 90;
    var sec = 50;
    setInterval(function(){
	   	if (min != 0 || sec !=0){
	   		//console.log("here");
	        document.getElementById("timer").innerHTML = "Thời gian làm bài còn "+ min +":" + sec ;
	        sec-=1;
	        if(min>0){
		       	if(sec < 0){
		       		min-=1;
			        sec = 59;
			    }		
		    }
	    }
	    else{
		    document.getElementById("timer").innerHTML = "<h1> Đã hết giờ làm bài</h1>";         
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
	console.log("here");
	var s= " ";
	s =	"<input type=\"radio\" name=\"choice"+a+"\"  value=\"A\">Tròn<br>"+
			"<input type=\"radio\" name=\"choice"+a+"\"  value=\"B\">Vuông<br>"+
			"<input type=\"radio\" name=\"choice"+a+"\"  value=\"C\">Méo<br>"+
			"<input type=\"radio\" name=\"choice"+a+"\"  value=\"D\">Dài<br>"
			;
		return s;
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
function renderList(a){
	var i = 1;
	var s = " ";
	for(;i<=a;i++){		
		if(i==1) s+="<li class=\"nav-item\"><a href=\"\" class=\"active nav-link\" data-toggle=\"pill\" data-target=\"#"+i+"\">Câu "+i+"</a></li>";
		else s+="<li class=\"nav-item\"><a class=\"nav-link\" href=\"\" data-toggle=\"pill\" data-target=\"#"+i+"\">Câu "+i+"</a></li>";
	}
	document.getElementById("list").innerHTML = s;
}

function renderQuest(a){
	var i = 1;
	var s = " ";
	
	for(;i<=a;i++){		
		if(i==1){
			s+="<div class=\"tab-pane fade show active\" id=\""+i+"\" role=\"tabpanel\"><p>"+i+": Trái đất hình gì:<div>"+getQuest(i)+"</div></div>";
		}
		else{
			s+="<div class=\"tab-pane fade\" id=\""+i+"\" role=\"tabpanel\"><p>"+i+": Trái đất hình gì:<div>"+getQuest(i)+"</div></div>";
		}

	}
	document.getElementById("quests").innerHTML = s;
}

function renderMon(s,r){
	document.getElementsByTagName('h1')[0].innerHTML = s ;
	document.getElementsByTagName('p')[0].innerHTML = r;
}