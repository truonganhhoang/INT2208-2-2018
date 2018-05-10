<?php 
ob_start();
session_start();

error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);

include_once('quantri/ketnoi.php');   

if (!$dbConnect) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}

if($_SESSION['username']){

  header('location:index.php'); 
}
 else{



if(isset($_POST['submit'])){
    // lỗi để trống form
    if($_POST['username'] == ''){
     $error_username = '<span style="color:red;">(*)<span>';   
    }
    else{
        $username = $_POST['username']; 
    }     
    if($_POST['password'] == ''){
        $error_password = '<span style="color:red;">(*)<span>'; 
    }
    else{
        $password = $_POST['password']; 
    }     
    $sql="SELECT * FROM member WHERE username='$username'AND password = '$password'";
    $query = mysql_query($sql);
    $row = mysql_fetch_array($query);
    $user=mysql_num_rows($query);
    if($user<=0){
        $error ='Tài khoản hoặc mất khẩu không hợp lệ!';
      }
      else {
  
        $_SESSION['username'] = $username;
        $_SESSION['password']=$password;
     
        header('location:index.php');
      }
}
 ?>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Đăng nhập</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <style type="text/css">
    body {
  background: url(img/bg.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0;
  padding: 0;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  z-index: 0;
}
.grad{
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: auto;
  height: auto;
 background: rgba(9,2,19,0.3);
  z-index: 1;
  opacity: 0.7;
}
.header{
  position: absolute;
  top: calc(50% - 35px);
  left: calc(50% - 255px);
  z-index: 2;
}

.header div{
  float: left;
    color: #fff;
    margin-left: -43px;
    font-family: 'Exo', sans-serif;
    font-size: 55px;
    font-weight: 200;
}

.header div span{
  color: #5379fa !important;
}

.login{
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 50px);
  height: 150px;
  width: 350px;
  padding: 10px;
  z-index: 2;
}

.login input[type=text]{
  width: 250px;
  height: 30px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.6);
  border-radius: 2px;
  color: #fff;
  font-family: 'Exo', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 4px;
}

.login input[type=password]{
  width: 250px;
  height: 30px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.6);
  border-radius: 2px;
  color: #fff;
  font-family: 'Exo', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 4px;
  margin-top: 10px;
}

.login input[type=submit]{
  width: 260px;
  height: 35px;
  background: #fff;
  border: 1px solid #fff;
  cursor: pointer;
  border-radius: 2px;
  color: #a18d6c;
  font-family: 'Exo', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 6px;
  margin-top: 10px;
}

.login input[type=submit]:hover{
  opacity: 0.8;
}

.login input[type=submit]:active{
  opacity: 0.6;
}

.login input[type=text]:focus{
  outline: none;
  border: 1px solid rgba(255,255,255,0.9);
}

.login input[type=password]:focus{
  outline: none;
  border: 1px solid rgba(255,255,255,0.9);
}

.login input[type=submit]:focus{
  outline: none;
}

::-webkit-input-placeholder{
   color: rgba(255,255,255,0.6);
}

::-moz-input-placeholder{
   color: rgba(255,255,255,0.6);
}

#dang-ky{
  width: 260px;
    height: 35px;
    background: #fff;
    border: 1px solid #fff;
    cursor: pointer;
    border-radius: 2px;
    color: #a18d6c;
    font-family: 'Exo', sans-serif;
    font-size: 16px;
    font-weight: 400;
    padding: 6px;
    margin-top: 10px;
}
#dang-ky>a{
  display: block;
    width: 260px;
    margin-left: -7px;
    text-decoration: none;
    color: #a18d6c;
}
#dang-ky:hover {
  opacity: 0.6;
}

      
    </style>
  </head>
  <body>
  <div class="grad"></div>

    <div class="header">
      <div>Site<span>Plus</span></div>
    </div>
          <form class="login" method="post" enctype="multipart/form-data">

          <h3>
          <?php   
        if(isset($error)){

          echo '<span style="color :red; font-size:14px;">'.$error.'</span>';}
        else{

              echo '<h5 style="font-size: 23px;"> Đăng nhập vào hệ thống </h5>';}  
           ?>
           </h3>
         
        <input type="text" placeholder="username"  name="username"><br>
        <input type="password" placeholder="password" name="password"><br>
        <input type="submit" name="submit" value="Đăng Nhập"><br>
        <button id="dang-ky"><a href="dangky.php">Đăng Ký</a></button>
    </form>
           

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>

<?php
  }

?>