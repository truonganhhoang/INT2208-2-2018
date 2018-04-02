<!DOCTYPE html>
<html>
<head>
	<title>Success</title>
	<link rel="stylesheet" type="text/css" href="../css/bootstrap-4.0.0-alpha.6-dist">
</head>
<body>
		
	<?php
		require_once('config.php');
	?>
	<?php
		if(isset($_POST['submit'])){
			mysqli_query($con,"INSERT INTO informationTable VALUES (
					'',
					'".$_POST['username']."',
					'".$_POST['birthday']."',
					'".$_POST['gender']."',
					".$_POST['identify'].",
					'".$_POST['dateofid']."',
					'".$_POST['adress']."',
					".$_POST['phone'].",
					'".$_POST['email']."',
					'".$_POST['images']."'
				)");
		}
	?>
	<h1>dang ky thanh cong</h1>
	<a href=../index.html class="btn btn-outline-light text-dark butt" role="button">RETURN HOME</a>
</body>
</html>
