var data = [
	{
		text:'Hardware',
		link:'images/hardware.jpg',
		nghia:'phần cứng'
	},
	{
		text:'remote',
		link:'images/remote.jpg',
		nghia:'điều khiển'
	},
	{
		text:'Operating system',
		link:'images/hedieuhanh.png',
		nghia:'hệ điều hành'
	},
	{
		text:'storage',
		link:'images/storage.webp',
		nghia:'lưu trữ'
	},
	{
		text:'application',
		link:'images/application.png',
		nghia:'ứng dụng'
	},
	{
		text:'demand',
		link:'images/demand.gif',
		nghia:'yêu cầu'
	},
	{
		text:'dog',
		link:'images/dog.jpg',
		nghia:'chó'
	},
	{
		text:'cat',
		link:'images/cat.jpg',
		nghia:'mèo'
	},
	{
		text:'pig',
		link:'images/pig.jpg',
		nghia:'lợn'
	},
	{
		text:'bird',
		link:'images/bird.jpeg',
		nghia:'chim'
	},
	
	
];
var count = 0;
var next = document.getElementById("next");
var nghia = document.getElementById("nghia")

next.addEventListener('click', function(){
	if(count > data.length-2){
		alert('Congrata ! you got all new words :)) ')
	}
	else{
		count ++;
		var img = document.getElementById('img')
		var text = document.getElementById('text')
		console.log(data[count].text)
		img.src = data[count].link;
		text.innerText = data[count].text
		nghia.innerText=data[count].nghia
		count = count;
		console.log(count)
	}
})

 var pre = document.getElementById('pr');

pre.addEventListener('click', function(){
	if(count <= 0){
		alert('you must click Next to start lesson !')
	}
	else{
	var img = document.getElementById('img')
	var text = document.getElementById('text')
	//console.log(data[1].text)
	count --;
	img.src = data[count].link;
	text.innerText = data[count].text
	nghia.innerText=data[count].nghia
	count = count;
	console.log(count)

	}
	
})

var input = document.getElementById('word')
function add(){
	if(input.value == ''){
		alert('please write something !')
	}
	else
	{
		var temp = 0;
		for(var i =0; i<data.length; i++){
			if(input.value == data[i].text || input.value==data[i].nghia){
				var img = document.getElementById('img')
				var text = document.getElementById('text')
				count=i;
				img.src = data[count].link;
				text.innerText = data[count].text
				input.value=''
				temp ++;
			}
		}
		if(temp == 0){
			alert('this word not exist !')
			input.value = ''
		}
	}
	
	
}


var contents = document.getElementsByClassName("main");
for (var i = 0; i < contents.length; i++) {
	contents[i].addEventListener("click", function () {

		this.children[0].classList.toggle("d-none");
		
		this.children[1].classList.toggle("d-none");

	}
)}