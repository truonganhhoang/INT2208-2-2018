<?php 
	session_start();
	// Đăng xuất
	// Kiểm tra xem người dùng đăng nhập hay chưa
	if(isset($_SESSION['loged'])) {
		unset($_SESSION['loged']);
	}		
	if(isset($_COOKIE['loged'])) {
		setcookie('loged', '', time()-100);
	}		
	header("Location: index.php");
?>