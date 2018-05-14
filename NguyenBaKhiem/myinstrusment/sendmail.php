<?php session_start();

require ("../myinstrusment/emailer/class.phpmailer.php");
require ("../myinstrusment/emailer/class.smtp.php");
require_once '../myinstrusment/configPDO.php';



if(!isset($_GET['id'])) {
	header('location:../myinstrusment/admin.php');
} else {
	$query = $db->prepare('SELECT * FROM users WHERE user_id =:id');
	$query->bindParam(':id', $_GET['id']);
	$query ->execute();
	$infouser= $query->fetchAll(PDO:: FETCH_ASSOC);
	foreach ($infouser as $key => $row) {
		$email =  $row['email'];
		$emailusername = $row['username'];
	}
}

if (isset($_POST['send'])) {

	$mail = new PHPMailer;
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->Port = 587;
	$mail->SMTPSecure = 'tls';
	$mail->SMTPAuth = true;
	$mail->Username = 'duoinhungconmuak@gmail.com';
	$mail->Password = '14111998k';
	$mail->isHTML(true);
	$mail->CharSet = "utf-8";
	$mail->SetFrom('duoinhungconmuak@gmail.com','INSTRUSMENT');
	$mail->addAddress($_POST['email'],$_POST['username']);
	$mail->AddReplyTo('duoinhungconmuak@gmail.com','INSTRUSMENT');
	$mail->Subject = $_POST['subject'];
	$mail->Body =$_POST['content'];
	if (!$mail->send()) {
		$error ='.Message could not be sent.';
		$errorinfo= $mail->ErrorInfo;
	} else {
		$success = 'Message has been sent.';
	}
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Sendmail</title>
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/small-business.css">
	<link rel="stylesheet" href="css/bootstrap-social.css">
	<link rel="stylesheet" href="css/font-awesome.css">
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
					<li class="nav-item">
						<a class="nav-link" href="../myinstrusment/admin.php">Control Panel
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
	<h2 class="controlpanel" id="ani1">MESSAGE PANEL</h2>
	<br>
	<div class="container-fluid">
		<div class="row">
			<?php if (isset($error)):  ?>
				<div class="alert alert-danger col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
					<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
					<strong>ERROR!</strong> <?php 
					echo $errorinfo;
					echo $error; ?>  
				</div>
			<?php elseif (isset($success)): ?>
				<div class="alert alert-success col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
					<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
					<strong>Hey!</strong> <?php echo $success; ?>
				</div>
			<?php endif ?>
		</div>
		<div class="row">
			<div class="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
				<form name="sentMessage" id="contactForm" method="POST" action="#">
					<div class="control-group form-group ">
						<div class="controls">
							<label for="">Username:</label>
							<input type="text" class="form-control" id="username" name="username" 
							value=" <?php echo $emailusername ?> ">
						</div>
					</div>
					<div class="control-group form-group">
						<div class="controls">
							<label for="">Email Address:</label>
							<input type="email" class="form-control" id="email"  name="email"
							value=" <?php echo $email ?> ">
						</div>
					</div>
					<div class="control-group form-group">
						<div class="controls">
							<label for="">Chủ đề</label>
							<input type="text" class="form-control" id="subject" name="subject">
						</div>
					</div>
					<div class="control-group form-group">
						<div class="controls">
							<label>Message:</label>
							<textarea rows="8" cols="60" class="form-control" id="content" name="content"></textarea>
						</div>
					</div>
					<div id="success" class="col-md-6">
						<input type="submit" value="Send" name="send" class="btn btn-success" style="float: right;">
					</div>
				</form>
			</div>

		</div>
	</div>
</body>
</html>