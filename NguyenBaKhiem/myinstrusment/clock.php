<!DOCTYPE html>
<html>
<head>
	<title>Analog Clock</title>
	<link rel="stylesheet" href="css/clock.css">
</head>
<body>
	<div class="containerclock1">
		<div class="clock1" id="clock">
			<div class="date" id="date"></div>
			<ul>
				<li id="hours"> </li>
				<li id="point">:</li>
				<li id="minutes"> </li>
				<li id="point">:</li>
				<li id="seconds"> </li>
			</ul>
		</div>
	</div>
	<div class="containerclock2">
		<div class="clock2">
			<img id="hourHand" class="hands" src="images/hourhand.png" alt="">
			<img id="minuteHand" class="hands" src="images/minutehand.png" alt="">
			<img id="secondHand" class="hands" src="images/secondhand1.png" alt="">
		</div>
	</div>
	<script type="text/javascript" src="js/clock.js"></script>
</body>
</html>