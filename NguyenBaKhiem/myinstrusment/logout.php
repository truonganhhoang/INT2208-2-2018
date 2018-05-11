<?php  session_start();

if (isset($_GET['logout'])) {
	if(isset($_SESSION['username'])) {
		session_destroy();
		unset($_SESSION['username']);
	}
	header('location:../myinstrusment/login.php');
}
header('location:../myinstrusment/login.php');



?>