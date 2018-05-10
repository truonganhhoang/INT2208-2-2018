<?php session_start();
require ("class.phpmailer.php");
require ("class.smtp.php");
$error; $success;$errorinfo;
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
	$mail->SetFrom('duoinhungconmuak@gmail.com','INSTRUSMENT');
	$mail->addAddress($_POST['email'],$_POST['fullname']);
	$mail->Subject = $_POST['subject'];
	$mail->Body =$_POST['content'];
	if (!$mail->send()) {
		$error ='Message could not be sent.';
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
	<title>Document</title>
</head>
<body>
	<?php if (isset($error)):  ?>
		<div class="alert alert-danger">
			<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
			<strong>ERROR!</strong> <?php 
			echo $error;
			echo $errorinfo; ?>  
		</div>
	<?php elseif (isset($success)): ?>
		<div class="alert alert-success">
			<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
			<strong>Hey!</strong> <?php echo $success; ?>
		</div>
		<<?php endif ?>
		<div class="row">
			<div class="col-lg-8 mb-4">
				<h3>Send us a Message</h3>
				<form name="sentMessage" id="contactForm" method="POST" action="#">
					<div class="control-group form-group">
						<div class="controls">
							<label for="">Full name:</label>
							<input type="text" class="form-control" id="fullname" name="fullname">
						</div>
					</div>
					<div class="control-group form-group">
						<div class="controls">
							<label for="">Email Address:</label>
							<input type="email" class="form-control" id="email"  name="email">
						</div>
					</div>
					<div class="control-group form-group">
						<div class="controls">
							<label for="">Chủ đề</label>
							<input type="text" id="subject" name="subject">
						</div>
					</div>
					<div class="control-group form-group">
						<div class="controls">
							<label>Message:</label>
							<textarea rows="10" cols="50" class="form-control" id="content" name="content"></textarea>
						</div>
					</div>
					<div id="success">
						<input type="submit" value="Send" name="send">
					</div>
				</form>
			</div>

		</div>
	</body>
	</html>