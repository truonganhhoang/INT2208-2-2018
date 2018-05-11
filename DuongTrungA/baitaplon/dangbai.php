<?php
ob_start();
session_start();
include_once('quantri/ketnoi.php');
if (!$dbConnect) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}
$timezone = +7;
echo $gio_dang= (string)gmdate("H:i:s | d-m-Y ", time() + 3600*($timezone+date("I")));


$username = $_SESSION['username'];
 $Author = "SELECT * FROM member WHERE username ='$username'";

 $queryAuthor = mysql_query($Author);
$rowqueryAuthor = mysql_fetch_array($queryAuthor);
echo $author = $rowqueryAuthor['author'];




if(isset($_POST['submit'])){
	$chu_de = $_POST['chu_de'];
	$anh_post=$_POST['anh_post'];

	if($_POST['noi_dung_post'] =='' ){
	 echo	$error_noi_dung_post = '<span style="color:red;">Bạn Đang nghĩ gì?<span>';
	}else {	
		$noi_dung_post= $_POST['noi_dung_post'];
	}
 	$anh_post = $_FILES['anh_post']['name'];
 	$tmp =  $_FILES['anh_post']['tmp_name'];

	
	 	move_uploaded_file($tmp, 'img/'.$anh_post);	
	 

	 $sql = "INSERT INTO post(author, anh_post,chu_de ,luot_like, author_like, noi_dung_post, gio_dang) 
                VALUES('$author', '$anh_post','$chu_de', 0 , '','$noi_dung_post', '$gio_dang')";
        $query = mysql_query($sql);

      header('location:index.php'); 

}




?>