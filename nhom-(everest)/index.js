alert("da");
// Store
localStorage.setItem("lastname", "Smith");
// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");
var obj_front= document.getElementById('front');
var obj_back = document.getElementById('back');
var bt_create = document.getElementById('create');
function getCardToLocalStorage(){
	var str = localstorge.getItem('datas');
	if(!str) {
		return [];
	}
	try {
		return JSON.parse(str);
	}catch (ex) {
		return [];
	}

} // lay data tu localstorge chuyen thanh object

function saveToLocalStorage(datas) {
	var str = JSON.stringify(datas);
	return localstorge.setItem('datas', str);

}// luu data kieu object vao local kieu string

function addDataToLocalStorage(text, text1) {
	var datas = getCardToLocalStorage();

	datas.push({
		front : text,
		back : text1
	});
	saveToLocalStorage(datas);

}// end add 
function emptyInput(){
	obj_front.value = '';
	obj_back.value = '';
}

bt_create.addEventListener('click', function(){
	var text = obj_front.value;
	var text1 = obj_back.value;
	addDataToLocalStorage(text,text1);


});
