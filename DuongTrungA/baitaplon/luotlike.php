<?php  
ob_start();
session_start();
include_once('quantri/ketnoi.php');

$id_post= $_GET['id_post'];

$username = $_SESSION['username'];

echo $username;

$sqlTest= "SELECT author_like FROM post WHERE id_post = $id_post ";
$queryTest = mysql_query($sqlTest);
$rowTest = mysql_fetch_array($queryTest);
 $author_like = $rowTest['author_like'];


if($author_like == $username){
$sql = "UPDATE post set luot_like = luot_like - 1 ,author_like =''   where id_post = $id_post";
$result=mysql_query($sql);
}else {
	$sql = "UPDATE post set luot_like = luot_like + 1 , author_like = '$username'   where id_post = $id_post";
$result=mysql_query($sql);
}


header('location:index.php');
?>


 