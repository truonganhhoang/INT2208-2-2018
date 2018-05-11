<?php session_start();

if (!isset($_SESSION['username'])) {
  //header('locaion:../instrusment/');
	header('locaion:../myinstrusment/login.php');
}
?>
<?php 
$status = "f";
$date= getdate();
$date =$date['year']."-".$date['mon']."-".$date['mday'];
$date = strtotime($date);
$date = date('Y-m-d', $date);
require_once 'configPDO.php';
if(isset($_GET['course_id'])) {
	$query = "SELECT user_id  FROM users WHERE username =:username";
	$query = $db->prepare($query);
	$query->bindParam(':username', $_SESSION['username']);
	$query->execute();
	$infouser= $query->fetchAll(PDO:: FETCH_ASSOC);
	foreach ($infouser as $key => $row) {
		$user_id = $row['user_id'];
	} 
	$query1 = "SELECT *  FROM courses_user WHERE course_id =:course_id";
	$query1 = $db->prepare($query1);
	$query1->bindParam(':course_id', $_GET['course_id']);
	$query1->execute();
	$infoc1 = $query1->FetchALL(PDO:: FETCH_ASSOC);
	foreach ($infoc1 as $key => $row1) {
		$course_id1 = $row1['course_id'];
		$user_id1 = $row1['user_id'];
	}
	if ($user_id==$user_id1 ) {
		$error = "You have already enroll in the course";
		if ($_GET['course_id']==1) {
			header('location:../myinstrusment/music-theory.php?fail');
		} else if($_GET['course_id']==2) {
			header('location:../myinstrusment/guitar.php?fail');
		}
		
	} else   {
		foreach ($infouser as $key => $row) {
			$query = "INSERT INTO courses_user (course_id, user_id, participateDate,status) VALUES(:course_id,:user_id, :participateDate, :status)";
			$stmt = $db->prepare($query);
			$stmt->bindParam(':course_id',$_GET['course_id'] );
			$stmt->bindParam(':user_id', $row['user_id']);
			$stmt->bindParam(':participateDate',$date);
			$stmt->bindParam(':status', $status);
			$stmt->execute();
		}
		if ($_GET['course_id']==1) {
			header('location:../myinstrusment/music-theory.php?success');
		} else if($_GET['course_id']==2) {
			header('location:../myinstrusment/guitar.php?success');
		}
	}	
}
?>