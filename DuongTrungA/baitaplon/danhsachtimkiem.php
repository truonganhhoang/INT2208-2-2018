<?php 
ob_start();
session_start();

error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);


if($_SESSION['username'])
{

  include_once('quantri/ketnoi.php');
  $username=$_SESSION['username'];
   $sql="SELECT author,username FROM member WHERE username = '$username'";
  $query=mysql_query($sql);
    $row = mysql_fetch_array($query);

  $sqlPost= "SELECT * FROM post  ORDER BY id_post DESC";
  $queryPost = mysql_query($sqlPost);

if(isset($_POST['stext'])){
  $stext = $_POST['stext'];
}
else{
  $stext = $_GET['stext'];
}
$stextNew = trim($stext);

$arr_stextNew = explode(' ', $stextNew);
$stextNew = implode('%', $arr_stextNew);
$stextNew = '%'.$stextNew.'%';
$sqlTim = "SELECT * FROM post WHERE noi_dung_post LIKE ('$stextNew') ORDER BY id_post DESC ";

$queryTim = mysql_query($sqlTim)

 
?>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Diễn đàn học siteplus</title>

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
    function xoa(){
        var conf = confirm('Bạn có thực sự muốn xóa post này?')
        return conf;
    }
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
          <a href="quanly.php"> <?php 
                
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
      
       
       <?php while ($rowTim = mysql_fetch_array($queryTim)){ ?>
         <div style="margin-top: 20px; margin-bottom: 20px; ">
              
            <div id="title-post" class="col-md-12">  <h4> chủ để <span> <?php  echo $rowTim['chu_de'];  ?> </span>    </h4> 
                    <a href="xempost.php?id_post=<?php echo $rowTim['id_post']; ?>">xem bài này</a>

            </div>
            <div id="author" class="col-md-12">
              <h3> Người Đăng :     <a href=""> <?php   echo $rowTim['author']; ?></a> </h3> <p id="time-post" > Giờ Đăng: <?php echo $rowTim['gio_dang']; ?>

              <span id="sua-xoa"   style="display:  <?php    

                $sqlAuthor =" SELECT author FROM member WHERE username = '$username'  ";
                $queryAuthor = mysql_query($sqlAuthor);
                $rowAuthor = mysql_fetch_array($queryAuthor);


                if( $rowAuthor['author'] == $rowTim['author']  ) {echo 'block';} else {echo 'none';}  ;  ?> "  > <a href="xoapost.php?id_post=<?php echo $rowTim['id_post'] ?>"> xóa</a> |  <a href="suapost.php?id_post=<?php echo $rowTim['id_post']; ?> "> sửa</a>           
                </span>
                </p>
              </div>
            <div></div>  
            <div>
            <div id="noi-dung-post" class="col-md-10">
            <h4> Nội dung: </h4>
              <?php echo  $rowTim['noi_dung_post']; ?>
           </div>
           <div id="cmt" class="col-md-2">
              <button > <a href="luotlike.php?id_post=<?php echo $rowTim['id_post']; ?>"> </a> </button>
                <p> <?php 
                $like_post = $rowTim['id_post'];
        $sqlLike = "SELECT luot_like FROM post WHERE  id_post = $like_post";
          $queryLike = mysql_query($sqlLike);
          $rowLike = mysql_fetch_array($queryLike);
            echo $rowLike['luot_like'];  ?> </p>
           </div>
            </div>   
           <div style="display: <?php if( empty($rowTim['anh_post']) ){ echo 'none';} else{ echo ' block '; }  ?>  ; background: rgba(9,2,19,0.6); " class="col-md-12">
            <img id="img-post" src="img/<?php echo $rowTim['anh_post']; ?>">              
           </div>
           <div id="footer-post" class="col-md-12"> 
           <p> click để xem tham gia bình luận  </p>
              
           </div>             
        
          </div>
          <?php } 
          ?>
          </div>
        
        <div class="col-md-4 col-sm-4" style="    padding: 0;     background: rgba(0,0,0,0);" >
          
         <div>
          <div id="sidebar-wrapper-right">
          <ul class="sidebar-nav">
           <li class="sidebar-brand">Chủ đề</li>
            <li class="chu-de"> <a href="cuocsong.php">Cuộc sống</a></li>
            <li class="chu-de"><a href="congviec.php">Công việc</a></li>
            <li class="chu-de"><a href="tinhyeu.php">tình yêu</a></li>
            <li class="chu-de"> <a href="banbe.php">bạn bè</li>
            <li class="chu-de"> <a href="hoctap.php"> học tập</a></li>
            <li class="chu-de"> <a href="friendzone.php"> friendzone</a></li>
            <li class="chu-de"> <a href="tienbac.php">Tiền bạc</a></li>
            <li class="chu-de"> <a href="tinhbanthan.php">Tình bạn thân</a></li>
            <li class="chu-de"> <a href="khac.php">Khác</a></li>
            
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