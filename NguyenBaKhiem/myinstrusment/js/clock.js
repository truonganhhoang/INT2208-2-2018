var month = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
var day= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var hourHand = document.getElementById('hourHand');
var minuteHand = document.getElementById('minuteHand');
var secondHand = document.getElementById('secondHand');



function initTime() {
	var date = new Date();
	var hour = date.getHours() % 24; // 0 - 23
	var minute = date.getMinutes();
	var second = date.getSeconds();
	if(hour<10) {
		hour = "0" +hour;
	}
	if(minute<10) {
		minute = "0" + minute;
	}
	if(second<10) {
		second = "0" + second;
	}
	document.getElementById('hours').innerHTML = hour;
	document.getElementById('minutes').innerHTML = minute;
	document.getElementById('seconds').innerHTML = second;
	document.getElementById("date").innerHTML = day[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear() ;
	var hourDeg = (hour * 30) + (0.5 * minute); // every hour, 30 deg. 30 / 60
	var minuteDeg = (minute * 6) + (0.1 * second); // every minute, 6 deg. 6 / 60
	var secondDeg = second * 6; // 360 / 60


	// hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
	// minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
	// secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';

	setTimeout(initTime, 1000);
};

initTime();