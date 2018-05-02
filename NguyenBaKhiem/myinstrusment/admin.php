<?php session_start();

require_once 'configPDO.php';
if($_SERVER['REQUEST_METHOD']== 'POST') {
	$username = $_POST['username'];
	$password = $_POST['password'];
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
	if(is_numeric($fullname)) {
		$error = 'Fullname is invalid!';
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
	if($cnt>1) {
		$error = 'Some of the informations that you provided is invalid!';
	}
	if (empty($username) or empty($password) or empty($fullname)) {
		$error = 'Information is not enough!';
	}
	if (!isset($error)) {
		$query = "SELECT username FROM users WHERE username = :username";
		$stmt = $db->prepare($query);
		$stmt->bindValue(':username', $username);
		$stmt->execute();
		$result = $stmt->fetch(PDO::FETCH_ASSOC);
		if($result) {
			$error = "user already exists!";
		}
		else {
			$password = hash('sha256', $password);
			$query = "INSERT INTO users (username,password,fullname, email) VALUES(:username, :password,:fullname, :email)";
			$stmt = $db->prepare($query);
			$stmt->bindValue(':username', $username);
			$stmt->bindValue(':password', $password);
			$stmt->bindValue(':fullname', $fullname);
			$stmt->bindValue(':email', $email);
			$stmt->execute();
			$success = "Add new user successfully!";
		}
	}
}
$query = $db->prepare('SELECT * FROM users');
$query ->execute();
$infouser= $query->fetchAll(PDO:: FETCH_ASSOC);
?>



<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Document</title>
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/small-business.css">
	<link rel="stylesheet" href="css/bootstrap-social.css">
	<link rel="stylesheet" href="css/font-awesome.css">
	<link rel="stylesheet" href="css/ani.css">
	<link rel="stylesheet" href="css/admin.css">
	<link rel="stylesheet" href="css/clock.css">
</head>
<body>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

		

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
				<ul class=" nav navbar-nav ml-auto">
					<li class="nav-item"> 
						<p class="nav-link">Xin chào Admin</p>
					</li>
					<li class="nav-item active">
						<a class="nav-link" href="../myinstrusment/">Home
							<span class="sr-only">(current)</span>
						</a>
					</li>
				</ul>
				
			</div>
		</div>
	</nav>
	<br>
	<br>
	<br>
	<br>
	<div class="container" id="bodyclock">

		<main class="container-fluid">
			<div class="containerclock1">
				<div class="clock1" id="clock">
					<div class="date" id="date"></div>
					<ul id="time">
						<li id="hours"> </li>
						<li id="point">:</li>
						<li id="minutes"> </li>
						<li id="point">:</li>
						<li id="seconds"> </li>
					</ul>
				</div>
			</div>
		</main>
	</div>
	<h2 class="controlpanel" id="ani1">CONTROL PANEL</h2>
	<ul class="nav nav-tabs" id="navtab">
		<li class="active"><a data-toggle="tab" href="#userpanel" aria-explanded="true">User</a></li>
		<li><a data-toggle="tab" href="#messagepanel" aria-explanded="true">Message</a></li>
		<li><a data-toggle="tab" href="#coursespanel" aria-explanded="true">Courses</a></li>
	</ul>
	<div class="tab-content">
		<div id="userpanel" class="tab-pane in active">
			<div class="container" id="formadd">

				<main class="container-fluid">
					<div class="row">
						<?php if(isset($error)):  ?>
							<div class="col-md-6">
								<div class="alert alert-danger">
									<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
									<strong>ERROR!</strong> <?php echo $error ?>
								</div>
							</div>
						<?php endif ?>
						<?php if(isset($success)):  ?>
							<div class="col-md-6">
								<div class="alert alert-success">
									<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
									<strong>Congration!</strong> <?php echo $success ?>
								</div>
							</div>
						<?php endif ?>
					</div>
					<div id="adduser">
						<div class="row" >
							<form action="#" method="POST" class="form-inline col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" role="form">
								<div class="form-group  col-12 col-sm-12 col-md-6 col-lg-6 col-xl-8">
									<input type="text" class="form-control col-12 col-sm-12 col-md-6" name="username"  placeholder="Username" autofocus="" onblur="javascript: this.value = ChuanhoaTen(this.value)">
									<input type="text" class="form-control col-12 col-sm-12 col-md-6" name="email" placeholder="Email">
									<input type="password" class="form-control col-12 col-sm-12 col-md-6" name="password"  placeholder="Password">
									<input type="text" class="form-control col-12 col-sm-12 col-md-6" name="fullname"  placeholder="Fullname" 
									onblur="javascript: this.value = ChuanhoaTen(this.value)">
								</div>
								<button class="btn btn-primary col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">Add user</button>
							</form>
						</div>
					</div>
					<div class="row">
						<div id="tableinfo" class="table-responsive">
							<caption class="" id="captiontable"> USER PANEL</caption>
							<br>
							<br>
							<table class="table table-striped table-hover table-bordered" >
								<thead class="table table-info">
									<tr>
										<th class="numbertb1">Number</th>
										<th class="idtb1">ID</th>
										<th class="usernametb1">Username</th>
										<th class="fullnametb1">Fullname</th>
										<th class="emailtb1">Email</th>
										<th class="deletetb1">Delete</th>
									</tr>
								</thead>
								<tbody>
									<?php foreach ($infouser as $key => $row): ?>
										<tr>
											<td> <?php echo ($key+1) ?></td>
											<td> <?php echo $row['user_id'] ?></td>
											<td> <?php echo $row['username'] ?></td>
											<td> <?php echo $row['fullname'] ?></td>
											<td> <?php echo $row['email'] ?></td>
											<td><a href="../myinstrusment/delete.php?id=<?php echo $row['user_id'] ?>">Delete</a></td>
										</tr>
									<?php endforeach ?>
								</tbody>
							</table>
						</div>
					</div>
				</main>

			</div>
		</div>
		<div id="messagepanel" class="tab-pane">
			<div class="container" id="formadd">

				<main class="container-fluid">
					<div class="row">
						<div id="tableinfo" class="table-responsive">
							<caption class="" id="captiontable"> MESSAGE PANEL</caption>
							<br>
							<br>
							<table class="table table-striped table-hover table-bordered" >
								<thead class="table table-info">
									<tr>
										<th class="numbertb2">Number</th>
										<th class="idtb2">ID</th>
										<th class="usernametb2">Username</th>
										<th class="emailtb2">Email</th>
										<th class="sendtb2">Send</th>
									</tr>
								</thead>
								<tbody>
									<?php foreach ($infouser as $key => $row): ?>
										<tr>
											<td> <?php echo ($key+1) ?></td>
											<td> <?php echo $row['user_id'] ?></td>
											<td> <?php echo $row['username'] ?></td>
											<td> <?php echo $row['email'] ?></td>
											<td><a href="../myinstrusment/sendmail.php?id=<?php echo $row['user_id'] ?>">Send</a></td>
										</tr>
									<?php endforeach ?>
								</tbody>
							</table>
						</div>
					</div>
				</main>

			</div>
		</div>
		<div id="coursespanel" class="tab-pane ">
		</div>
	</div>

</div>

<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/form.js"></script>
<script type="text/javascript" src="js/clock.js"></script>
<!-- 	<script type="text/javascript">
		$(document).ready(function(){
			$('.nav-tabs a').on('show.bs.tab', function(){
				if ($($(this).attr("href")).html() == "") {
					if ($(this).attr("href") == "#messagepanel") {
						$("#messagepanel").html();
					} else if ($(this).attr("href") == "#coursespanel") {
						$("#coursespanel").html();
					}	
				}
			});
		});
	</script> -->


</body>
</html>