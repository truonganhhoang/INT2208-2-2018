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
	<title>User</title>
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
		<div class="container">
			<div class="bgcolor">
				<br><br><br>
				<br><br><br>
				<h1 class="info" id="ani" >Student info</h1>
				<div class="row ">
					<div class="col-3 col-md-3 col-sm-3 col-lg-3 col-xl-3 list-info">
						<div>
							<img src="images/avtlogin.png" alt="avatar" class="img-thumbnail">
						</div>
						<div class="list-group">
							<a href="#" class="list-group-item avatar" id="avatar">Avatar</a>
							<a href="#" class="list-group-item general" id="general">General</a>
							<a href="#" class="list-group-item security">Security</a>
						</div>
					</div>
					<div class="more col-9 col-md-9 col-sm-9 col-lg-9 col-xl-9" id="loadcontent">
						<!-- <div class="col-8 col-md-8 col-sm-8 col-lg-8 col-xl-8">
							<img src="images/avtlogin.png" alt="avatar" class="img-thumbnail avt">
						</div> -->
					</div>
				</div>
				<br><br>
			</div>
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
			$(document).ready(function() {

				$('#general').click(function() {

					$('#loadcontent').load('general.html');

				});

			});
		</script>
	</body>
	</html>