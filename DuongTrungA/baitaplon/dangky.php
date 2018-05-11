<?php 
ob_start();
session_start();
error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);
include_once('quantri/ketnoi.php');


if (!$dbConnect) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}


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
    if($_POST['author'] == ''){
        $error_author = '<span style="color:red;">(*)<span>'; 
    }
    else{
        $author = $_POST['author']; 
    } 
    if($_POST['fullname'] == ''){
        $error_fullname = '<span style="color:red;">(*)<span>'; 
    }
    else{
        $fullname = $_POST['fullname']; 
    }
    if($_POST['email'] == ''){
        $error_email = '<span style="color:red;">(*)<span>';   
    }
    else{
        $email = $_POST['email']; 
    } 
    if($_POST['birthday'] == ''){
        $error_birthday = '<span style="color:red;">(*)<span>';   
    }
    else{
        $birthday = $_POST['birthday']; 
    } 
    if($_POST['sex'] == ''){
        $error_sex = '<span style="color:red;">(*)<span>';   
    }
    else{
        $sex = $_POST['sex']; 
    }
     if(isset($username) && isset($password) && isset($author) && isset($fullname) && isset($email) && isset($birthday) && isset($sex)){
      
        // Thêm Thông tin SV vào CSDL
        $sql = "INSERT INTO member (username, password,author , fullname, email, birthday, sex ) 
                VALUES('$username', '$password','$author', '$fullname', '$email', '$birthday', '$sex' )";
        $query = mysql_query($sql);
        
        if($query){
        header('location:index.php'); 
    }

         
    } else{
       $error  =' <h3 style="margin: 0;
    color: Red;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;"> Hãy Nhập Đầy nội dung!</h3> ';
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
  font-family: 'Exo', sans-serif;
  font-size: 35px;
  font-weight: 200;
}

.header div span{
  color: #5379fa !important;
}
label{
  font-size: 23px;
    text-transform: uppercase;
}
.login{
  position: absolute;
  top: calc(50% - 180px);
  left: calc(50% - 50px);
  height: 150px;
  width: 350px;
  padding: 10px;
  z-index: 2;
}
.login input {
  margin: 10px 0;
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
.login input[type=date]{
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
      opacity: 0.8;
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
.login input[type=date]:focus{
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
#sel1{
  width: 250px;
    height: 30px;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.6);
    border-radius: 2px;
    color: #333;
    font-family: 'Exo', sans-serif;
    font-size: 16px;
    font-weight: 400;
    padding: 4px;
}

}

      
    </style>
  </head>
  <body>
  <div class="grad"></div>

    <div class="header">
      <div>Site<span>Plus</span></div>
    </div>  
    
          <form class="login" method="post" enctype="multipart/form-data">
          <label> Đăng Ký thành Viên  </label>
          <?php echo $error; ?>
        <input type="text" placeholder="Tài Khoản"  name="username"><br>
        <input type="password" placeholder="Mật Khẩu" name="password"><br>
        <input type="text" placeholder="Bí danh"  name="author"><br>
        <input type="text" placeholder="Họ Tên"  name="fullname"><br>
        <input type="date" placeholder="Ngày Sinh"  name="birthday"><br>  
        <input type="email" placeholder="Email"  name="email"><br>
        <select  id="sel1" name="sex" >
        <option value=''>Giới Tính</option>
        <option value="Nam">Nam</option>
        <option value="Nữ">Nữ</option>
        <option value="Khác">Khác</option>
      </select> <br>      
        <input type="submit" name="submit" value="Đăng Ký"><br>
    </form>
           

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>