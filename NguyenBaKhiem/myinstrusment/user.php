<?php session_start();

if (!isset($_SESSION['username'])) {
	//header('locaion:../instrusment/');
	header('locaion:../myinstrusment/login.php');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Login</title>
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/small-business.css">
	<link rel="stylesheet" href="css/bootstrap-social.css">
	<link rel="stylesheet" href="css/font-awesome.css">
	<link rel="stylesheet" href="css/ani.css">
	<link rel="stylesheet" href="css/sidenavuser.css">
	<link rel="stylesheet" href="css/user.css">
</head>
<body id="body">
	<!-- Navigation -->
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
		<div id="mySidenav" class="sidenav">
			<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
			<a href="user.php">Hồ sơ</a>
			<div class="row">
				<button class="col-md-5 col-lg-5 col-sm-12 col-10"><a href="../myinstrusment/logout.php?action=logout">Logout</a></button>
				<!-- <button class="col-md-5 col-lg-5 col-sm-12 col-10"><a href="register.php">Change password</a></button> -->
			</div>
		</div>

		

		<div class="container" >
			<a class="navbar-brand" href="../myinstrusment/" title="home"><img src="images/myinstrucment4.jpg" class = "menupicture" ></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<form action="" accept-charset="UTF-8" class="thanh-tim-kiem">

				<input autocomplete = "off"type="text" name="thanhtimkiem" placeholder=" search..." class="thanhtimkiem">
				<button tabindex="-1" type="submit" class="skill-search-button"></button>
			</form>
			<label for="toggle2" class="search" ><img src="css/css.jpg" style="width: 100%;"></label>
			<input type="checkbox" id="toggle2"/>
			<div class="list-group menu2  " style=" min-width: 100%;" >
				<form action="" accept-charset="UTF-8" class="thanh-tim-kiem2"  >
					<input autocomplete = "off"type="text" name="thanhtimkiem" placeholder=" search..." class="thanhtimkiem1" style="width:100%;">
				</form>
			</div>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active">
						<a class="nav-link" href="../myinstrusment/">Home
							<span class="sr-only">(current)</span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#" onclick="openNav()" > 
							<?php if(isset($_SESSION['username'])) {
								echo $_SESSION['username']; 
							} else {
								header('location:../myinstrusment/login.php');
							}

							?> </a>
						</li>
						<li class="nav-item">
							<div class="dropdown">
								<button type="button" class="btn btn-danger nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="opencourses">Learning</button>
								<div class="dropdown-menu">
									<a class="dropdown-item musictheory-title" href="music theory.html">Music theory</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item guitar-title" href="guitar.html">Guitar</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item piano-title" href="#">Piano</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item violin-title" href="#">Violin</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item flute-title" href="#">Flute</a>
								</div>
							</div>
						</li>
						<li class="nav-item ">
							<div class="dropdown">
								<button type="button" class="btn btn-danger nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  style="word-spacing: 0.002em">Chord Library</button>
								<div class="dropdown-menu">
									<a class="dropdown-item guitar-title" href="chord library guitar c.html">Guitar</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item piano-title" href="#">Piano</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item violin-title" href="#">Violin</a>
								</div>
							</div>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="../myinstrusment/contact.php">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<br>
		<div class="container" id="content" style="padding-top:  40px; padding-bottom: 40px;">
			<nav  class="row" id="menubar">
				<div class="col-md-4">
					<ul>	
						<li><a href="">Contact and Basic info</a></li>
						<li><a href="">Security</a></li>			
					</ul>
				</div>
				<div class="col-md-6"></div>
				<div class="col-md-2"></div>
			</nav>
		</div>
		<!-- Footer -->
		<footer class="py-5 bg-dark">
			<div class="container">
				<p class="m-0 text-center text-white">© 2018 My instrument
				320 studio.inc  All rights reserved.</p>
			</div>
			<!-- /.container -->
		</footer>
		<script src="js/jquery-3.3.1.min.js"></script>
		<script src="js/bootstrap.bundle.min.js"></script>
		<script src="js/bootstrap.js"></script>
		<script src="js/sidenav.js"></script>
		<script>
			function setcook() {
				<?php 


				?>
			} 
		</script>
	</body>
	</html>