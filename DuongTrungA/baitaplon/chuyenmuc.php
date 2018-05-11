<?php
echo $_GET['chu_de'];
	
?>

<?php 
ob_start();
session_start();

error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);
$chu_de =  $_GET['chu_de'] ;
echo $chu_de;
if($_SESSION['username'])
{

  include_once('quantri/ketnoi.php');
  $username=$_SESSION['username'];
   $sql="SELECT author,username FROM member WHERE username = '$username'";
  $query=mysql_query($sql);
    $row = mysql_fetch_array($query);

  $sqlPost= "SELECT * FROM post  WHERE chu_de = '$chu_de'  ORDER BY id_post DESC";
  $queryPost = mysql_query($sqlPost);

if(isset($_POST['submit'])){
  $anh_post=$_POST['anh_post'];

  if($_POST['noi_dung_post'] =='' ){
   echo $error_noi_dung_post = '<span style="color:red;">Bạn Đang nghĩ gì?<span>';
  }else { 
    $noi_dung_post= $_POST['noi_dung_post'];
  }
}


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
      <div id="user-post">
      <form id="post" action="dangbai.php" method="post" enctype="multipart/form-data">
        
        <input type="file" name="anh_post" value="chọn ảnh"> 
         <label>CHỦ ĐỀ BÀI VIẾT</label> 
                <select name="chu_de" style="color: #333;
    background: rgba(9,2,19,0.2);
    border: 1px solid">
                      <option value="khác"> Khác</option> 
                        <option value="lập trình">  Lập trình </option>
                        <option value="toán học"> Toán học </option>
                        <option value="xã hội ">Xã hội</option>
                        <option value="cuộc sống"> Cuộc Sống</option>   
                                      
                </select>
                <br>


         <label>NỘI DUNG POST :</label><br /><textarea cols="70" rows="2" name="noi_dung_post"></textarea>
         <?php if(isset($error_noi_dung_post)) {echo $error_noi_dung_post; } ?>
        <br>
        <input id="dang-bai" type="submit" name="submit" value="đăng bài">

       </form>
       
      </div>

      <!-- nội dung chủ đề post-->
      
       
        <?php while ($rowPost = mysql_fetch_array($queryPost)){ ?>
         <div style="margin-top: 20px; margin-bottom: 20px; background: rgba(9,2,19,0.3); ">
              
            <div id="title-post" class="col-md-12">  <h4> chủ để <span> <?php  echo $rowPost['chu_de'];  ?> </span>    </h4> 
                    <a href="xempost.php?id_post=<?php echo $rowPost['id_post']; ?>">xem bài này</a>

            </div>
            <div id="author" class="col-md-12">
              <h3> Người Đăng :     <a href=""> <?php   echo $rowPost['author']; ?></a> </h3> <p id="time-post" > Giờ Đăng: <?php echo $rowPost['gio_dang']; ?>

              <span id="sua-xoa"   style="display:  <?php    

                $sqlAuthor =" SELECT author FROM member WHERE username = '$username'  ";
                $queryAuthor = mysql_query($sqlAuthor);
                $rowAuthor = mysql_fetch_array($queryAuthor);


                if( $rowAuthor['author'] == $rowPost['author']  ) {echo 'block';} else {echo 'none';}  ;  ?> "  > <a href="xoapost.php?id_post=<?php echo $rowPost['id_post'] ?>"> xóa</a> |  <a href="suapost.php?id_post=<?php echo $rowPost['id_post']; ?> "> sửa</a>           
                </span>
                </p>
              </div>
            <div></div>  
            <div>
            <div id="noi-dung-post" class="col-md-10">
            <h4> Nội dung: </h4>
              <?php echo  $rowPost['noi_dung_post']; ?>
           </div>
           <div id="cmt" class="col-md-2">
              <button > <a href="luotlike.php?id_post=<?php echo $rowPost['id_post']; ?>"> </a> </button>
                <p> <?php 
                $like_post = $rowPost['id_post'];
        $sqlLike = "SELECT luot_like FROM post WHERE  id_post = $like_post";
          $queryLike = mysql_query($sqlLike);
          $rowLike = mysql_fetch_array($queryLike);
            echo $rowLike['luot_like'];  ?> </p>
           </div>
            </div>   
           <div style="display: <?php if( empty($rowPost['anh_post']) ){ echo 'none';} else{ echo ' block '; }  ?>  ;  background: rgba(9,2,19,0.6);
    color: #fff; " class="col-md-12">
            <img id="img-post" src="img/<?php echo $rowPost['anh_post']; ?>">              
           </div>
           <div id="footer-post" class="col-md-12"> 
           <p> click để xem tham gia bình luận  </p>
              
           </div>             
        
          </div>
          <?php } 
          ?>
       
          </div>
        
        <div class="col-md-4 col-sm-4" style="    padding: 0;" >
          
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