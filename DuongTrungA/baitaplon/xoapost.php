<?php
ob_start();
session_start();
include_once('quantri/ketnoi.php');
 $id_post=$_GET['id_post'];

$sql = "DELETE FROM post WHERE id_post=$id_post";
$query = mysql_query($sql);
header('location:index.php');
?>