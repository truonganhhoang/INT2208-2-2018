<?php 
ob_start();
session_start();

error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);

if($_SESSION['username']){
  include_once('quantri/ketnoi.php');
$username=$_SESSION['username'];
$sql="SELECT author,username FROM member WHERE username = '$username'";
  $query=mysql_query($sql);
    $row = mysql_fetch_array($query);




?>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script type="text/javascript">
    //chức năng tìm kiếm.
      function searchFocus(){
  if(document.sform.stext.value == 'tìm kiếm'){
    document.sform.stext.value = '';  
  } 
}
function searchBlur(){
  if(document.sform.stext.value == ''){
    document.sform.stext.value = 'tìm kiếm'; 
  } 
}
    </script>
    <style type="text/css">
       
    </style>
  </head>
  <body>
   <div class="body"></div>
    <div class="grad"></div>
    <!-- menu top -->
    <div id="header-wrap">
          <nav class="navbar navbar-default" data-spy="affix" data-offset-top="0">
          <div class="container" style="background:  rgba(0,0,0,0);" >
                  <div class="container-fluid" style="background:  rgba(0,0,0,0);">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header" style="background:  rgba(0,0,0,0);">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a style="color: #fff;" class="navbar-brand active " href="index.php" >Side <span style="color: #5379fa;"> Plus </span></a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse " id="bs-example-navbar-collapse-1" style="background:  rgba(0,0,0,0);">
      <form class="navbar-form navbar-left" method="post" name="sform" action="danhsachtimkiem.php">
        <div class="form-group" style="background: rgba(0,0,0,0);">
          <input style="width: 400px;     background: rgba(215,225,210,0.6);" type="text" class="form-control" placeholder="Search"  onfocus="searchFocus();" onblur="searchBlur();" type="text" name="stext" placeholder="tìm kiếm" >
        </div>
        <input  type="submit" name="sbutton" class="btn btn-default" value="Tìm kiếm">
      </form>
      <ul class="nav navbar-nav navbar-right"> 
        <li class="dropdown ">
          <a href="test.php"> <?php 
                
                echo $row['author'];

            ?></a>
        </li>
        <li><a href="dangxuat.php"> Đăng xuất </a></li>
      </ul> 
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
  </div>
</nav>
    </div>
   <!-- Fixed navbar -->
  
    
    







  <div class="container" style="width: 900px;     padding: 0;      background:  rgba(0,0,0,0); ">
  <div class="col-md-8 col-sm-8" style="background: rgba(0,0,0,0);     padding: 0;">
      <!-- for user -->
      

      <!-- nội dung chủ đề post-->
       <form action="doimatkhau.php" method="post">
      <label class="tie"> đổi mật khẩu:</label>
        <input class="inp" type="password" name="password">
        <input class="go" type="submit" name="submit" value="thay đổi">
       </form>
          <!-- tên  -->
        <form action="doiten.php" method="post">
      <label class="tie"> đổi tên:</label>
        <input class="inp" type="text" name="fullname">
        <input  class="go" type="submit" name="submit" value="thay đổi">
       </form>
         <!--  bí danh  -->
         <!--  ngày sinh -->
       <form action="ngaysinh.php" method="post">
      <label class="tie"> đổi ngày sinh:</label>
        <input class="inp" type="date" name="birthday">
        <input  class="go" type="submit" name="submit" value="thay đổi">
       </form>
         <!--  giới tính -->
       <form action="sex.php" method="post">
      <label class="tie" > đổi giới tính:</label>
              <select style="color: #ccc;" class="inp" name="sex">
                        <option value="Nam">Nam</option>
                        <option value="Nữ"> Nữ</option>   
                        <option value="Khác"> Khác</option>                 
                </select>
        
        <input class="go" type="submit" name="submit" value="thay đổi">
       </form>
       
        
         
       
          </div>
        
        <div class="col-md-4 col-sm-4" style="    padding: 0;     background: rgba(0,0,0,0);" >
          
         <div>
          <div id="sidebar-wrapper-right">
          <ul class="sidebar-nav">
           <li class="sidebar-brand">Chủ đề</li>
               <li class="chu-de"> <a href="chuyenmuc.php?chu_de=cuộc sống">Cuộc sống</a></li>
            <li class="chu-de"><a href="chuyenmuc.php?chu_de=lập trình">Lập trình</a></li>
            <li class="chu-de"><a href="chuyenmuc.php?chu_de=toán học">Toán học</a></li>
            <li class="chu-de"> <a href="chuyenmuc.php?chu_de=xã hội">Xã hội</li>
            <li class="chu-de"> <a href="chuyenmuc.php?chu_de=khác">Khác</a></li>
            
        </ul>
        </div>

          </div>
            
        </ul>
            

          </div>
    </div>



    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>

<?php
}
  else{
  header('location:dangnhap.php');
}
?>