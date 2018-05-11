<?php session_start();

if (!isset($_SESSION['username'])) {
	//header('locaion:../instrusment/');
	header('locaion:../myinstrusment/login.php');
}
?>

<?php 

require_once 'configPDO.php';

if(isset($_POST['submit'])) {
	$username = $_SESSION['username'];
	$fullname = $_POST['fullname'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$birthday = $_POST['birthday'];
	$sex = $_POST['sex'];
	$query = "UPDATE users SET fullname =':fullname', email =':email' WHERE username= :username ";
	$query= $query->prepare();
	$query->bindParam(':fullname', $fullname);
	$query->bindParam(':email', $email);
	// $query->bindParam(':phone', $phone);
	// $query->bindParam(':birthday', $birthday);
	// $query->bindParam(':sex', $sex);
	$query->bindParam(':username', $username);
	$query->execute();
	echo $fullname;
	echo $email;
	echo $birthday;
	echo $sex;
	echo $username;
}

?>

