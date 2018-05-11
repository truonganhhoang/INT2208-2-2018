<?php session_start();

if (!isset($_SESSION['username'])) {
  //header('locaion:../instrusment/');
  header('locaion:../myinstrusment/login.php');
}
?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Guitar-chapter3</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->

  <link href="css/bootstrap-social.css" rel="stylesheet">
  <link href="assets/css/font-awesome.css" rel="stylesheet">
  <link href="css/shop-homepage.css" rel="stylesheet">
  <link href="css/small-business.css" rel="stylesheet">
  <link href="css/sidenavuser.css" rel="stylesheet">

</head>

<body>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
     <a class="navbar-brand" href="../myinstrusment/" title="home"><img src="img/my instrucment 4.jpg" class = "menupicture" ></a>

     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon" ></span>
    </button>
    <form action="" accept-charset="UTF-8" class="thanh-tim-kiem">

      <input autocomplete = "off"type="text" name="thanhtimkiem" placeholder=" search..." class="thanhtimkiem">
      <button tabindex="-1" type="submit" class="skill-search-button"></button>
    </form>
    <label for="toggle2" class="search" ><img src="css/css.jpg" style="width: 100%;"></label>
    <input type="checkbox" id="toggle2"/>
    <div class="list-group menu2  " style=" min-width: 100%;" >
      <form action="" accept-charset="UTF-8" class="thanh-tim-kiem2"  >
        <input autocomplete = "off"type="text" name="thanhtimkiem" placeholder=" search..." class="thanhtimkiem1" style="width:100%;">
      </form>
    </div>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="../myinstrusment/">Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onclick="openNav()" > 
            <?php if(isset($_SESSION['username'])) {
              echo $_SESSION['username']; 
            } else {
              header('location:../myinstrusment/login.php');
            }

            ?> 
          </a>
        </li>
        <li class="nav-item  active">
          <div class="dropdown">
            <button type="button" class="btn btn-danger nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Learning</button>
            <div class="dropdown-menu">
              <a class="dropdown-item musictheory-title" href="music-theory.php">Music theory</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item guitar-title" href="guitar.php">Guitar</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item piano-title" href="#">Piano</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item violin-title" href="#">Violin</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item flute-title" href="#">Flute</a>
            </div>
          </div>
        </li>
        <li class="nav-item ">
          <div class="dropdown">
            <button type="button" class="btn btn-danger nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="word-spacing: 0.002em">Chord Library</button>
            <div class="dropdown-menu">
              <a class="dropdown-item guitar-title" href="#">Guitar</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item piano-title" href="#">Piano</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item violin-title" href="#">Violin</a>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.php">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="user.php">Hồ sơ</a>
  <div class="row">
    <button class="col-md-5 col-lg-5 col-sm-12 col-10"><a href="../myinstrusment/logout.php?action=logout">Sign Out</a></button>
    <button class="col-md-5 col-lg-5 col-sm-12 col-10"><a href="../myinstrusment/login.php">Sign In</a></button>
  </div>
</div>
<!-- Page Content -->
<div class="container">

  <div class="row">

   <div class="col-lg-3">
     <label for="toggle"><h1 class="my-4 guitar-title" >Guitar</h1></label>
     <input type="checkbox" id="toggle"/>
     <div class="list-group menu1">
      <a href="music-theory.php" class="list-group-item guitar-chapter1-title">Chapter 1: Music theory</a>
      <a href="guitar-chapter2.php" class="list-group-item guitar-chapter2-title">Chapter 2: Guitar overview </a>
      <a href="#" class="list-group-item guitar-chapter3-title">Chapter 3: Chord</a>
      <a href="#" class="list-group-item guitar-chapter4-title">Chapter 4: How to read TAB</a>
      <a href="#" class="list-group-item guitar-chapter5-title">Chapter 5: Fingerstyle's skills</a>
    </div>

  </div>
  <!-- /.col-lg-3 -->

  <div class="col-lg-9">


    <div class="row row-card "   id="row1">
      <div class="flip3d"   >
        <div id="front1"  class="front"  onclick="fronttoback('front1','back1','continuous1')" ><img src="chord library/D minor.jpg" class="imgflip"></div>
        <div id="back1" class="back"  onclick="backtofront('front1','back1')"><h1 class="fliptext">Dm chord</h1></div>
      </div> 
      <div style=" width: 100%;  height: 40px;margin-top: 0px;"><h5 style="width: 140px; color: gray;margin: auto;" >Click to open</h5></div>
      <div style="display: none;" class="continue-card" id="continuous1"><h4 style="width: 140px; margin: auto;text-align: center;" onclick="showdisplay('row1','row2')">continue</h4></div>
    </div>

    <div class="row row-card " style="display: none;"   id="row2">
      <div class="flip3d" style="margin-top: 100px;" >
        <div id="front2"  class="front"  onclick="fronttoback('front2','back2','continuous2')" ><img src="chord library/A major.jpg" class="imgflip"></div>
        <div id="back2" class="back"  onclick="backtofront('front2','back2')"><h1 class="fliptext">A chord</h1></div>
      </div> 
      <div style=" width: 100%;  height: 40px;margin-top: 0px; "><h5 style="width: 140px; color: gray;margin: auto;" >Click to open</h5></div>
      <div style="display: none;" class="continue-card" id="continuous2"><h4 style="width: 140px; margin: auto;text-align: center;" onclick="showdisplay('row2','row3')">continue</h4></div>
    </div>

    <div class="row row-card " style="display: none; "   id="row3" >
      <div style="margin:auto;width: 90%;height: 80%">
        <div class="img3d"  style="margin-top: 100px;width: 50%; float: left;" >
          <div  class="front" style="float: left" id="img3d-1"><img src="chord library/D minor.jpg" class="imgflip"></div>
        </div> 
        <div  style="width: 50% ;float: right;margin-top: 120px" class="answer-card-total"  >
          <div class="answer-card" id="right1" onclick="right('right1','img3d-1','continuous3')" ><h3 style="width: 140px; margin: auto;" >Am chord</h3></div>
          <div class="answer-card" id="wrong1-1" onclick="wrong('wrong1-1')"><h3 style="width: 140px; margin: auto;" >C chord</h3></div>
          <div class="answer-card" id="wrong1-2" onclick="wrong('wrong1-2')"><h3 style="width: 140px; margin: auto;" >Dm chord</h3></div>
        </div>
      </div>
      <div style="display: none;" class="continue-card" id="continuous3"><h4 style="width: 140px; margin: auto;text-align: center" onclick="showdisplay('row3','row4')">continue</h4></div>
    </div>

    <div class="row row-card " style="display: none; "   id="row4" >
      <div style="margin:auto;width: 90%;height: 80%">
        <div class="img3d"  style="margin-top: 100px;width: 50%; float: left;" >
          <div  class="front" style="float: left" id="img3d-2"><img src="chord library/A major.jpg" class="imgflip"></div>
        </div> 
        <div  style="width: 50% ;float: right;margin-top: 120px" class="answer-card-total"  >
          <div class="answer-card" id="wrong2-1" onclick="wrong('wrong2-1')" ><h3 style="width: 140px; margin: auto;" >A chord</h3></div>
          <div class="answer-card" id="right2"  onclick="right('right2','img3d-2','continuous4')"><h3 style="width: 140px; margin: auto;" >F chord</h3></div>
          <div class="answer-card" id="wrong2-2" onclick="wrong('wrong2-2')"><h3 style="width: 140px; margin: auto;" >Em chord</h3></div>
        </div>
      </div>
      <div style="display: none;" class="continue-card" id="continuous4"><h4 style="width: 140px; margin: auto;text-align: center" onclick="showdisplay('row4','row5')">continue</h4></div>
    </div>

    <div class="row row-card " style="display: none; "   id="row5" >
      <div style="margin:auto;width: 90%;height: 80%">
        <div class="img3d"  style="margin-top: 100px;width: 50%; float: left;" >
          <div  class="front" style="float: left" id="img3d-3"><img src="chord library/A major.jpg" class="imgflip"></div>
        </div> 
        <div  style="width: 50% ;float: right;margin-top: 120px" class="answer-card-total"  >
          <div class="answer-card" id="wrong3-1" onclick="wrong('wrong3-1')" ><h3 style="width: 140px; margin: auto;" >D chord</h3></div>
          <div class="answer-card" id="wrong3-2" onclick="wrong('wrong3-2') "><h3 style="width: 140px; margin: auto;" >F chord</h3></div>
          <div class="answer-card" id="right3" onclick="right('right3','img3d-3','continuous5')"><h3 style="width: 140px; margin: auto;" >A chord</h3></div>
        </div>
      </div>
      <div style="display: none;" class="continue-card" id="continuous5"><h4 style="width: 140px; margin: auto;text-align: center" onclick="showdisplay('row5','row6')">continue</h4></div>
    </div>

    <div class="row row-card " style="display: none;"   id="row6">
      <div class="flip3d" style="margin-top: 100px;" >
        <div id="front6"  class="front"  onclick="fronttoback('front6','back6','continuous6')" ><img src="chord library/G minor.jpg" class="imgflip"></div>
        <div id="back6" class="back"  onclick="backtofront('front6','back6')"><h1 class="fliptext">Gm chord</h1></div>
      </div> 
      <div style=" width: 100%;  height: 40px;margin-top: 0px; "><h5 style="width: 140px; color: gray;margin: auto;" >Click to open</h5></div>
      <div style="display: none;" class="continue-card" id="continuous6"><h4 style="width: 140px; margin: auto;text-align: center;" onclick="showdisplay('row6','row7')">continue</h4></div>
    </div>

    <div class="row row-card " style="display: none; "   id="row7" >
      <div style="margin:auto;width: 90%;height: 80%">
        <div class="img3d"  style="margin-top: 100px;width: 50%; float: left;" >
          <div  class="front" style="float: left" id="img3d-7"><img src="chord library/A major.jpg" class="imgflip"></div>
        </div> 
        <div  style="width: 50% ;float: right;margin-top: 120px" class="answer-card-total"  >
          <div class="answer-card" id="wrong7-1" onclick="wrong('wrong7-1')" ><h3 style="width: 140px; margin: auto;" >D chord</h3></div>
          <div class="answer-card" id="right7" onclick="right('right7','img3d-7','continuous7')"><h3 style="width: 140px; margin: auto;" >E chord</h3></div>
          <div class="answer-card" id="wrong7-2" onclick="wrong('wrong7-2')"><h3 style="width: 140px; margin: auto;" >A chord</h3></div>
        </div>
      </div>
      <div style="display: none;" class="continue-card" id="continuous7"><h4 style="width: 140px; margin: auto;text-align: center" onclick="showdisplay('row7','row8')">continue</h4></div>
    </div>

    <div class="row row-card " style="display: none; "   id="row8" >
      <div style="margin:auto;width: 90%;height: 80%">
        <div class="img3d"  style="margin-top: 100px;width: 50%; float: left;" >
          <div  class="front" style="float: left" id="img3d-8"><img src="chord library/Eminor.jpg" class="imgflip"></div>
        </div> 
        <div  style="width: 50% ;float: right;margin-top: 120px" class="answer-card-total"  >
          <div class="answer-card" id="wrong8-1" onclick="wrong('wrong8-1')" ><h3 style="width: 140px; margin: auto;" >D chord</h3></div>
          <div class="answer-card" id="right8" onclick="right('right8','img3d-8','continuous8')"><h3 style="width: 140px; margin: auto;" >Em chord</h3></div>
          <div class="answer-card" id="wrong8-2" onclick="wrong('wrong8-2')"><h3 style="width: 140px; margin: auto;" >C chord</h3></div>
        </div>
      </div>
      <div style="display: none;" class="continue-card" id="continuous8"><h4 style="width: 140px; margin: auto;text-align: center" onclick="showdisplay('row8','row9')">continue</h4></div>
    </div>

    <div class="row row-card " style="display: none;"   id="row9">
      <div class="flip3d" style="margin-top: 100px;" >
        <div id="front9"  class="front"  onclick="fronttoback('front9','back9','continuous9')" ><img src="chord library/F minor.jpg" class="imgflip"></div>
        <div id="back9" class="back"  onclick="backtofront('front9','back9')"><h1 class="fliptext">Fm chord</h1></div>
      </div> 
      <div style=" width: 100%;  height: 40px;margin-top: 0px; "><h5 style="width: 140px; color: gray;margin: auto;" >Click to open</h5></div>
      <div style="display: none;" class="continue-card" id="continuous9"><h4 style="width: 140px; margin: auto;text-align: center;" onclick="showdisplay('row9','last')">continue</h4></div>
    </div>

    <div class="row row-card " style="display: none;"   id="last">

      <div style=" width: 100%;  height: 40px;margin-top: 0px; "><h1 style="width: 200px; margin: auto;margin-top: 200px" >congratulation </h1></div>
      <div  class="continue-card" id="continuous9"><a href="guitar-game.php"><h4 style="width: 180px; margin: auto;text-align: center; margin-top: 220px;" >back to game</h4></a></div>
    </div>




    <!-- /.row -->

  </div>
  <!-- /.col-lg-9 -->

</div>
<!-- /.row -->

</div>
<!-- /.container -->

<!-- Footer -->
<footer class="py-5 bg-dark">
  <div class="container">
    <p class="m-0 text-center text-white">© 2018 My instrument
    320 studio.inc  All rights reserved. </p>
  </div>
  <!-- /.container -->
</footer>
<!--  Nav side -->
<script src="js/sidenav.js"></script>

<!-- Bootstrap core JavaScript -->
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script type="text/javascript" src="js/guitar-chapter3-game-Dm,A,Gm,Fm.js"></script>
</body>

</html>
