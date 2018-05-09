<?php
  $connect = mysqli_connect('localhost', 'root', '', 'tinycards') or die("kết nối không thành công");
  mysqli_set_charset($connect,"utf8");
  session_start();
  if(isset($_POST['submit'])) {
    // Kiểm tra có tích vào ô ghi nhớ hay không
    if(isset($_POST['remember']) && $_POST['remember'] == true) {
      $tk = $_POST['user_name'];
      $mk = $_POST['pass'];
      $rows = mysqli_query($connect,"
        select * from user where user_name = '$tk' and password = '$mk'
      ");
      $count = mysqli_num_rows($rows);
      if ($count == 1) {
        setcookie("loged", true, time()+100);
        $row = mysqli_fetch_assoc($rows);
        setcookie("full_name", $row["full_name"],  time()+100);
        header("location: index.php");
      } 
      else {
        setcookie("error", "Sai tên đăng nhập hoặc mật khẩu!", time()+5, "/","", 0);
      }
    }
    else {
      $tk = $_POST['user_name'];
      $mk = $_POST['pass'];
      $rows = mysqli_query($connect,"
        select * from user where user_name = '$tk' and password = '$mk'
      ");
      $count = mysqli_num_rows($rows);
      if ($count == 1) {
        $_SESSION["loged"] = true;
        $row = mysqli_fetch_assoc($rows);
        $_SESSION['full_name'] = $row["full_name"];
        header("location: index.php");
      } 
      else {
        setcookie("error", "Sai tên đăng nhập hoặc mật khẩu!", time()+5, "/","", 0);
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

<div class="container imgborder" style="margin-top: 100px;  background-color: #FFFFFF; height: 800px">
  <?php
    if(isset($_COOKIE["error"])){
  ?>
    <div class="alert alert-danger">
        <strong>'ERROR!'</strong> <?php echo $_COOKIE["error"]; ?>
    </div>
  <?php } ?> 
  <h1>Log in</h1>
  <form method="post">
    <div class="form-group">
      <label for="name">User name:</label>
      <input type="text" class="form-control" id="user_name" placeholder="Enter email" name="user_name" required style="width: 500px">
    </div>
    <div class="form-group">
      <label for="pass">Password:</label>
      <input type="password" class="form-control" id="pass" placeholder="Enter password" name="pass" required style="width: 500px">
    </div>
    <div class="form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember"> Remember me
      </label>
    </div>
    <button type="submit" name="submit" class="btn btn-primary">Log in</button>
  </form>
</div>

</body>
</html>