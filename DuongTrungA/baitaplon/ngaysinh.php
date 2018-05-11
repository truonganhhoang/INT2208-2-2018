<?php
ob_start();
session_start();
include_once('quantri/ketnoi.php');
if (!$dbConnect) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}
$username = $_SESSION['username'];
echo $username;

  
if (isset($_POST['submit'])) {
	$birthday=$_POST['birthday'];
	echo $birthday;
    $sqlFullname = "UPDATE member SET birthday= '$birthday' WHERE username = '$username' ";
        $queryFullname = mysql_query($sqlFullname);

        header('location:index.php'); 
}


?>