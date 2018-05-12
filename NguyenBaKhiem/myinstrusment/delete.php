<?php 

require_once '../myinstrusment/configPDO.php';
if(!isset($_GET['id'])) {
	header('location:../myinstrusment/admin.php');
} else {
	$query = "DELETE  FROM users WHERE user_id =:id";
	$query = $db->prepare($query);
	$query->bindParam(':id', $_GET['id']);
	$query->execute();
	header('location:../myinstrusment/admin.php#');
}

 ?>