<?php  session_start();

if (isset($_GET['logout'])) {
	if(isset($_SESSION['username'])) {
		unset($_SESSION['username']);
		session_destroy();
		
	}
}
header('location:../myinstrusment/login.php');



?>