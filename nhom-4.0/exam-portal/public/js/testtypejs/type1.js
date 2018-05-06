//alert("Hi");



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


