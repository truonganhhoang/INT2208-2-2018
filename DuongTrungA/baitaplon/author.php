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
	$author=$_POST['author'];
	echo $author;
    $sqlFullname = "UPDATE member SET author= '$author' WHERE username = '$username' ";
        $queryFullname = mysql_query($sqlFullname);

        header('location:index.php'); 
}


?>