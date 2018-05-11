<?php session_start();

require_once 'configPDO.php';

if($_SERVER['REQUEST_METHOD']== 'POST') {
	$username = $_POST['username'];
	$password = $_POST['password'];
	$confirmpassword = $_POST['confirmpassword'];
	$fullname = $_POST['fullname'];
	$email = $_POST['email'];
	$pattern= '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
	$cnt = 0;

	if (strlen($username)<5 or strlen($username)>25) {
		$error = 'Username must from 5 to 25 character!';
		$cnt = $cnt+1;
	}
	if (strlen($password)<6 or strlen($password)>35) {
		$error = 'Password must from 6 to 25 character!';
		$cnt = $cnt+1;
	}
	if (strlen($confirmpassword)<6 or strlen($confirmpassword)>35) {
		$error = 'Password must from 6 to 25 character!';
		$cnt = $cnt+1;
	}
	if (strcmp($confirmpassword,$password)) {
		$error = 'Password are not same!';
		$cnt = $cnt+1;
	}
	if (strlen($email)<11 or strlen($email)>50) {
		$error = 'Email must from 11 to 50 character!';
		$cnt = $cnt+1;
	}
	if (!preg_match($pattern, $email)) {
		$error = 'Email is invalid!';
		$cnt = $cnt+1;
	}
	if(is_numeric($fullname)) {
		$error = 'Fullname is invalid!';
		$cnt = $cnt+1;
	}
	if($cnt>1) {
		$error = 'Some of the informations that you provided is invalid!';
	}
	if (empty($username) or empty($password) or empty($confirmpassword) or empty($fullname) or empty($email)) {
		$error = 'Information is not enough!';
	} 


	if (!isset($error)) {
		
		//Gán giá trị và thực thi
		$query = "SELECT username FROM users WHERE username = :username";
		$stmt = $db->prepare($query);
		$stmt->bindValue(':username', $username);
		$stmt->execute();
		$user = $stmt->fetch(PDO:: FETCH_ASSOC);
		//$stmt->setFetchMode(PDO::FETCH_ASSOC);
		//$_SESSION('location: dashboard.php');
		if($user) {
			$error = "Account already exists.";
		} else {
			//$password =  Password_Hash($password, PASSWORD_DEFAULT);
			$password = hash('sha256', $password);
			$query = "INSERT INTO users (username,password, fullname, email) VALUES(:username, :password, :fullname, :email)";
			$stmt = $db->prepare($query);
			$stmt->bindParam(':username', $username);
			$stmt->bindParam(':password', $password);
			$stmt->bindParam(':fullname', $fullname);
			$stmt->bindParam(':email', $email);
			$stmt->execute();
			$_SESSION['username'] = $username;
		}
	}
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Register</title>
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/small-business.css">
	<link rel="stylesheet" href="css/ani.css">
</head>
<body id="background">
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">		

		<div class="container">
			<a class="navbar-brand" href="../myinstrusment/" title="home"><img src="images/myinstrucment4.jpg" class = "menupicture" ></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<form action="" accept-charset="UTF-8" class="thanh-tim-kiem">

				<input autocomplete = "off" type="search" id="search" name="thanhtimkiem" placeholder=" search..." class="thanhtimkiem">
				<button tabindex="-1" type="submit" class="skill-search-button"><i class="material-icons">&#xe8b6;</i></button>
			</form>
			<label for="toggle2" class="search" ><img src="images/css.jpg" style="width: 100%;"></label>
			<input type="checkbox" id="toggle2"/>
			<div class="list-group menu2  " style=" min-width: 100%;" >
				<form action="" accept-charset="UTF-8" class="thanh-tim-kiem2"  >
					<input autocomplete = "off" type="search" id="search" name="thanhtimkiem" placeholder=" search..." class="thanhtimkiem1" style="width:100%;">
					<button tabindex="-1" type="submit" class="skill-search-button"><i class="material-icons">&#xe8b6;</i></button>
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
						<a class="nav-link" href="contact.php">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<br>

	<div id="" class="container">
		<div class="row" style="text-overflow: ellipsis; word-wrap: break-word;">
			<div class="col-xl-8 col-md-12 col-sm-12 col-12 col-lg-8" style="text-align: center;">
				<img class="img-fluid rounded" src="images/Rock-music-elements-murals-Bar-Cafe-Restaurant-KTV-instrument-leisure-center-wall-wallpaper-photo-wallpaper.jpg" alt="">
				<h1 style="color:indianred">My instrument</h1>
				<p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want! <a href="#" id="ani1">Quick learning!!</a></p>
			</div>

			<hr>
			<div class="col-xl-4 col-md-12 col-sm-12 col-12 col-lg-4">
				<?php if (isset($error)): ?>
					<div class="alert alert-danger" id="error">
						<button type="button" class="close" data-dismiss="alert" aria-hidden="true"><p id="closeerror" style="font-size: medium;">x</p></button>
						<strong>ERROR!</strong> <?php echo $error ?> 
					</div>
				<?php elseif(!isset($error) &&isset($_POST['submit'])): ?>
					<div class="alert alert-success">
						<strong>Congratulation!</strong> Add new user successfully!<a href="../myinstrusment/user.php">Additional information</a>
					</div>
				<?php endif ?>
				<form action="" id="" class="form-signin" method="post">
					<h2 class="form-signin-heading" id="ani">Create new account</h2>
					<div class="row">
						<div class="form-group col-md-12">
							<input type="text" class="form-control" name="username"  placeholder="Username" autofocus=""
							onblur="javascript: this.value = ChuanhoaTen(this.value)"
							value="<?php if(isset($_POST['submit'])) {
								echo $_POST['username'];
							} ?>">
						</div>
					</div>
					<div class="row">
						<div class="form-group col-md-12">
							<input type="text"  id="fullname" class="form-control" name="fullname" placeholder="Fullname" 
							onblur="javascript: this.value = ChuanhoaTen(this.value)"
							value="<?php if(isset($_POST['submit'])) {
								echo $_POST['fullname'];
							} ?>">
						</div>
					</div>
					<div class="row">
						<div class="form-group col-md-12">
							<input type="text" class="form-control" name="email"  id="email" placeholder="Email" 
							value="<?php if(isset($_POST['submit'])) {
								echo $_POST['email'];
							} ?>">
						</div>
					</div>
					<div class="row">
						<div class="form-group col-md-12">
							<input type="password" id="password" class="form-control" name="password" placeholder="********">
						</div>
						<div class="form-group col-md-12">
							<input type="password" id="confirmpassword" class="form-control" name="confirmpassword" placeholder="********">
						</div>
					</div>
					<div class="custom-checkbox">
						<input type="checkbox" class="agree" id="agree">
						<label for="agree">
							<span style="margin-left: 5px;">I agree to all terms</span>
						</label>
					</div>
					<div id="law" class="alert alert-info" style="display: none">
						<button type="button" class="close" data-dismiss="alert" aria-hidden="true"><p id="closelaw">&times;</p></button>
						<legend style="">
							Terms
						</legend>
						<p>-Copyright by 320Studio, you must not share our course.</p>
						<p>-Don't libel us.</p>
					</div>
					<div class="row">
						<button class="btn btn-lg btn-primary btn-block " type="submit" name="submit" id="submit" disabled="">Register Account</button>	

						<div class="col-md-10"></div>
						<button class="btn btn-lg btn-block" type="btn" name="submit" style="margin-top: 8px;"><a href="../myinstrusment/login.php">Sign in with your account</a></button>
					</div>		
				</form>
			</div>
			<div class="card text-white bg-secondary my-4 text-center col-md-12">
				<div class="card-body">
					<h1 class="text-white m-0">Learn instruments and music theory all by yourself !!</h1>
				</div>
			</div>
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
	<script src="js/form.js"></script>
	<script src="js/bootstrap.bundle.min.js"></script>
	<script src="js/jquery-3.3.1.min.js"></script>
	<script src="js/bootstrap.js"></script>
</body>
</html>