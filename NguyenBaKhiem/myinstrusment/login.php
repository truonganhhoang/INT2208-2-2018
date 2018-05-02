<?php session_start(); 
if (isset($_SESSION['username'])) {
	header('locaion:../myinstrusment/');
} else {
	header('locaion:../myinstrusment/login.php?error=signin');
}
require_once 'configPDO.php';
$username; $password; $error;
if(isset($_POST['submit'])) {
	$username = $_POST['username'];
	$password = $_POST['password'];
	$password1 = $_POST['password'];
	if (empty($username) or empty($password)) {
		$error = 'Please enter username, password!';
	} 
	if (!isset($error)) {

		//$password =  Password_Hash($password, PASSWORD_);
		$password = hash('sha256', $password);
		$query = "SELECT username FROM users WHERE username = :username";
		$stmt = $db->prepare($query);
		$stmt->bindValue(':username', $username);
		$stmt->execute();
		$userrow = $stmt->fetch(PDO::FETCH_ASSOC);
		if($stmt->rowCount()!=1) {
			$error = 'User is not exists!';
		} 
		else if ($stmt->rowCount()==1) {
			$query= "SELECT password FROM users WHERE password = :password";
			$stmt = $db->prepare($query);
			$stmt->bindValue(':password', $password);
			$stmt->execute();
			$passwordrow = $stmt->fetch(PDO:: FETCH_ASSOC);
			
			if($stmt->rowCount()<1) {
				$error=" Username or password is invalid!";
			}
			elseif ($stmt->rowCount()>0) {
				$_SESSION['username'] = $username;
				header('location:../myinstrusment/');
				if (isset($_POST['remenber'])) {
					setcookie('username', $username, time()+(86400*15),'/','',0,0);
					setcookie('password1', $password1, time()+(86400*15),'/','',0,0);
				}
			}
		}
	}
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
</head>
<body id="background">
	<nav class="navbar navbar-expand-lg fixed-top">

		

		<div class="container">
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
						<a class="nav-link" href="../myinstrusment/contact.php">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<br>
	<br>
	<br>
	<div class="container">
		
		<div class="row " style="text-overflow: ellipsis; word-wrap: break-word;">
			<div class="col-xl-8 col-md-12 col-sm-12 col-12 col-lg-8" style="text-align: center;">
				<img class="img-fluid rounded" src="images/Rock-music-elements-murals-Bar-Cafe-Restaurant-KTV-instrument-leisure-center-wall-wallpaper-photo-wallpaper.jpg" alt="">
				<h1 style="color:indianred">My instrument</h1>
				<p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want! <a href="#" id="ani1">Quick learning!!</a></p>
				
			</div>
			<hr>
			<div class=" col-xl-4 col-md-12 col-sm-12 col-12 col-lg-4">
				<?php if (isset($error)): ?>
					<div class="alert alert-danger">
						<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&nbsp;</button>
						<strong>Lỗi!</strong> <?php echo $error ?>
					</div>
				<?php endif ?>
				<form action="../myinstrusment/login.php" class="form-signin" method="post">
					<h2 class="form-signin-heading" id="ani">Đăng nhập hệ thống</h2>
					<div class="row">
						<div class="form-group col-md-12">
							<input type="text" class="form-control" id="username" name="username" placeholder="Username" autofocus=""
							onblur="javascript: this.value = ChuanhoaTen(this.value)"
							value="<?php if(isset($_POST['submit'])) {
								echo $_POST['username'];
							} 
							if(isset($_COOKIE['username']) && !isset($_POST['submit'])) {
								echo $_COOKIE['username'];
							}
							?>">
						</div>
					</div>
					<div class="row">
						<div class="form-group col-md-12">
							<input type="password" class="form-control" id="password" name="password" placeholder="Password" 
							value="<?php if(isset($_COOKIE['password1'])) {
								echo $_COOKIE['password1'];
							} ?>">
						</div>
					</div>
					<div class="custom-checkbox">
						<input type="checkbox" class="remember" id="remember"  name="remenber" checked="">
						<label for="remember">
							<p style="margin-left: 5px;">Remember me</p>
						</label>
					</div>
					<div class="row" style="margin-right: 1%; margin-left: 1%; " >
						<button class="btn btn-lg btn-primary btn-block col-md-12" type="submit" name="submit">Login</button>
						<button class="btn btn-block btn-social btn-facebook col-md-12" style="color: white;">
							<span class="fa fa-facebook"></span> Sign in with Facebook
						</button>
						<button class="btn btn-block btn-social btn-google" style="color: white;">
							<span class="fa fa-google"></span> Sign in with Google
						</button>
						<button class="btn btn-lg btn-block col-md-6" type="btn" name="register" ><a href="register.php" style="font-size: 16px;">Register</a></button>

						<button class="btn btn-lg btn-block col-md-6" type="btn" name="foggotenpassword"><a href="foggotenpassword.php" style="font-size: 16px;">Forgot password</a></button>
					</div>
				</form>
			</div>
			<div class="card text-white bg-secondary my-4 text-center col-md-12">
				<div class="card-body">
					<h1 class="text-white m-0">Learn instruments and music theory all by yourself !!</h1>
				</div>
			</div>
		</div>
		<!-- Call to Action Well -->
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
	<script src="js/form.js"></script>
</body>
</html>