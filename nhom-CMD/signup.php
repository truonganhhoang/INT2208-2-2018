<?php 
  $connect = mysqli_connect('localhost', 'root', '', 'tinycards') or die("kết nối không thành công");
  mysqli_set_charset($connect,"utf8");
  session_start();
  if(isset($_POST['dangky'])) {
    $user_name = $_POST["user_name"];
    $pass = $_POST["pass"];
    $confirm_pass = $_POST["confirm_pass"];
    $full_name = $_POST["full_name"];
    $rows = mysqli_query($connect,"
        select * from user where user_name = '$user_name'
      ");
    $count = mysqli_num_rows($rows);
    if ($count == 1) {
      header('Location: signup.php');
      setcookie("error1", "The account name already exists!", time()+5, "/","", 0);
    }
    else {
      if ($pass == $confirm_pass) {
        mysqli_query($connect,"
            INSERT INTO user(`user_name`, `password`, `full_name`) VALUES ('$user_name', '$pass', '$full_name')
          ");
        header('Location: signup.php');
        setcookie("success", "Logged in successfully!", time()+5, "/","", 0);
      }
      else {
        header('Location: signup.php');
        setcookie("error2", "Incorrect password!", time()+5, "/","", 0);
      }
    }
    
  }

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Tinycards</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
  <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/jquery.flip.js"></script>
  <script type="text/javascript" src="js/flip.js"></script>
  <style>
    @font-face {
      font-family: TinycardsFont;
      src: url("fonts/DINNextRoundedLTPro-Bold.woff2");
    }
  </style>
</head>
<body style="font-family: TinycardsFont; background-color: #F7F7F7">
  <!-- header -->
  <header>
    <div class="container-fluid" style="background-color: #32CDFF">
      <nav class="navbar navbar-expand-sm fixed-top" style="background-color: #32CDFF">
        <div class="container">
          <a class="navbar-brand" href="index.php">
              <img src="images/icon.png" alt="logo" style="width:40px;">
              <b style="font-size: 30px; color: white">tinycards</b>
            </a>    
        </div>
      </nav>
    </div>
  </header>
  <!-- end header -->

<div class="container imgborder" style="margin-top: 100px;  background-color: #FFFFFF; height: 800px" >
  <!-- tên tài khoản đã tồn tại -->
  <?php
    if(isset($_COOKIE["error1"])){
  ?>
    <div class="alert alert-danger">
        <strong>'ERROR!'</strong> <?php echo $_COOKIE["error1"]; ?>
    </div>
  <?php } ?> 


  <!-- Mật khẩu không chính xác -->
  <?php
    if(isset($_COOKIE["error2"])){
  ?>
    <div class="alert alert-danger">
        <strong>'ERROR!'</strong> <?php echo $_COOKIE["error2"]; ?>
    </div>
  <?php } ?> 

  <!-- đăng ký thành công -->
  <?php
        if(isset($_COOKIE["success"])){
      ?>
      <div class="alert alert-success">
          <strong>'Success!'</strong> <?php echo $_COOKIE["success"]; ?>
      </div>
      <?php } ?>
  <div>
    <h1>Create a Duolingo account</h1>
    <form method="post">
      <div class="form-group">
        <label for="name">Full Name:</label>
        <input type="text" class="form-control" id="full_name" placeholder="Enter full name" name="full_name" required style="width: 500px">
      </div>
      <div class="form-group">
        <label for="name">User Name:</label>
        <input type="text" class="form-control" id="user_name" placeholder="Enter user name" name="user_name" required style="width: 500px">
      </div>
      <div class="form-group">
        <label for="pass">Password:</label>
        <input type="password" class="form-control" id="pass" placeholder="Enter password" name="pass" required style="width: 500px">
      </div>
      <div class="form-group">
        <label for="name">Confirm Password:</label>
        <input type="password" class="form-control" id="confirm_pass" placeholder="Enter confirm password" required name="confirm_pass" style="width: 500px">
      </div>

      <button type="submit" name="dangky" class="btn btn-primary">Sign up</button>
    </form>
  </div>
  
</div>

</body>
</html>