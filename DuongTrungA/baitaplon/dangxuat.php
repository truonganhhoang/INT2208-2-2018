<?php
session_start();

if($_SESSION['username']){

	session_unset($_SESSION['username']);

}
header('location:dangnhap.php');



 ?>