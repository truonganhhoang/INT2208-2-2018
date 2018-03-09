alert("Trang web đang xây dựng, trong lúc tang gia bối rối có gì sơ xuất, gia đình xin được lượng thứ");
function inputEmail(){
    document.getElementById("table1").innerHTML +=
    	'<tr>'+
    		'<td>'+
    			'<input type="email" name="email" placeholder="Your email">'+
    		'</td>'+
    	'</tr>';
    document.getElementById("rwspn").innerHTML='<button id="createbutton">Tạo</button>';
}
function show(id1,id2,id3){
	document.getElementById(id1).className = "show";
	document.getElementById(id2).className = "closed";
	document.getElementById(id3).className = "closed";
}
function test(id){
	document.getElementById(id).innerHTML=Date();
}