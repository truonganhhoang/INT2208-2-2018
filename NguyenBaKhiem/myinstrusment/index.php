
<?php session_start();

if (!isset($_SESSION['username'])) {
	//header('locaion:../instrusment/');
	header('locaion:../myinstrusment/login.php');
}
?>





<!DOCTYPE html>
<html lang="en">

<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="">

	<title>My instrument</title>

	<!-- Bootstrap core CSS -->
	<link href="css/bootstrap.css" rel="stylesheet">

	<!-- Custom styles for this template -->
	<link href="css/small-business.css" rel="stylesheet">
	<link href="css/sidenavuser.css" rel="stylesheet">
	<link rel="stylesheet" href="css/bootstrap-social.css">

</head>

<body>
	<!-- Navigation -->
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
		<div id="mySidenav" class="sidenav">
			<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
			<a href="user.php">Hồ sơ</a>
			<div class="row">
				<button class="col-md-5 col-lg-5 col-sm-12 col-10"><a href="../myinstrusment/logout.php?action=logout">Sign Out</a></button>
				<button class="col-md-5 col-lg-5 col-sm-12 col-10"><a href="../myinstrusment/login.php">Sign In</a></button>
			</div>
		</div>

		

		<div class="container">
			<a class="navbar-brand" href="../myinstrument/" title="home"><img src="../images/myinstrucment4.jpg" class = "menupicture" ></a>
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

							?> 
						</a>
					</li>
					<li class="nav-item">
<!-- 						<div class="dropdown">
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
						</div> -->
						<a href="#" class="nav-link" onclick="openlearn()" >Learning</a>
					</li>
					<li class="nav-item ">
						<div class="dropdown">
							<button type="button" class="btn btn-danger nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  style="word-spacing: 0.002em">Chord Library</button>
							<div class="dropdown-menu">
								<a class="dropdown-item guitar-title" href="chord library guitar c.php">Guitar</a>
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

	<!-- Page Content -->
	<div class="container" >

		<!-- Heading Row -->
		<div class="row my-4">
			<div class="col-lg-8">
				<img class="img-fluid rounded" src="images/Rock-music-elements-murals-Bar-Cafe-Restaurant-KTV-instrument-leisure-center-wall-wallpaper-photo-wallpaper.jpg" alt="">
			</div>
			<!-- /.col-lg-8 -->
			<div class="col-lg-4">
				<h1 style="color:indianred;">My instrument</h1>
				<p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
				<a class="btn btn-primary btn-lg" href="#">Start learning</a>
			</div>
			<!-- /.col-md-4 -->
		</div>
		<!-- /.row -->

		<!-- Call to Action Well -->
		<div class="card text-white bg-secondary my-4 text-center">
			<div class="card-body">
				<h1 class="text-white m-0">Learn instruments and music theory all by yourself !!</h1>
			</div>
		</div>

		<!-- Content Row -->
		<div  id="learn1" style="display: none">
			<div class="row">
				<div class="col-md-4 mb-4">
					<div class="card h-100 musictheory-card">
						<div class="card-body">
							<img src="images/ETtYan4.jpg" class="hinh-anh">
							<a href ="../myinstrusment/page/music-theory.php"><h2 class="card-title musictheory-title"">Music theory</h2></a>
							<p class="card-text">Music theory is the most important things that everyone who want to learn instrument must know. Once you understand music theory, you can play every instrument you like. In this lesson, you will learn about music theory and how to read whole sheet music. </p>
						</div>
					<div class="card-footer">
						<a href ="music-theory.php" class="btn btn-primary">Learn</a>
					</div>
				</div>
			</div>
			<!-- /.col-md-4 -->
			<div class="col-md-4 mb-4">
				<div class="card h-100 guitar-card">
					<div class="card-body">
						<img src="images/gitarlearn.JPG" class="hinh-anh">
						<a href ="guitar.php"> <h2 class="card-title guitar-title" >Guitar</h2></a>
						<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
					</div>
					<div class="card-footer">
						<a href="guitar.php" class="btn btn-primary">Learn</a>
					</div>
				</div>
			</div>
			<!-- /.col-md-4 -->
			<div class="col-md-4 mb-4">
				<div class="card h-100 piano-card">
					<div class="card-body"> 
						<img src="images/pianolearn.jpg" class="hinh-anh">
						<h2 class="card-title piano-title">Piano</h2>
						<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
					</div>
					<div class="card-footer">
						<a href="#" class="btn btn-primary">Learn</a>
					</div>
				</div>
			</div>
			<!-- /.col-md-4 -->
			<div class="col-md-4 mb-4">
				<div class="card h-100 violin-card">
					<div class="card-body"> 
						<img src="images/violinlearn.jpg" class="hinh-anh">
						<h2 class="card-title violin-title">Violin</h2>
						<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
					</div>
					<div class="card-footer">
						<a href="#" class="btn btn-primary">Learn</a>
					</div>
				</div>
			</div>
			<div class="col-md-4 mb-4">
				<div class="card h-100 flute-card">
					<div class="card-body"> 
						<img src="images/flutelearn.jpg" class="hinh-anh">
						<h2 class="card-title flute-title">Flute</h2>
						<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
					</div>
					<div class="card-footer">
						<a href="#" class="btn btn-primary">Learn</a>
					</div>
				</div>
			</div>
		</div>
	</div>

</div>
<!-- /.row -->

<!-- /.container -->

<!-- Footer -->
<footer class="py-5 bg-dark">
	<div class="container">
		<p class="m-0 text-center text-white">© 2018 My instrument
		320 studio.inc  All rights reserved. </p>
	</div>
	<!-- /.container -->
</footer>
<!-- 	Nav side -->
<script src="js/sidenav.js"></script>
<!-- Bootstrap core JavaScript -->
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/bootstrap.bundle.min.js"></script>
</body>

</html>

