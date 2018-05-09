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

  <title>Chord library guitar </title>

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

      <label for="toggle" ><h1 class="my-4 musictheory-title">Chord Library <span style="color:#f39317;">guitar</span></h1></label>
      <input type="checkbox" id="toggle"/>
      <div class="list-group menu1">
        <a href="chord library guitar c.php" class="list-group-item guitar-chapter2-title">C chord</a>
        <a href="#" class="list-group-item musictheory-lesson2-title"><u>C#  chord</u></a>
        <a href="chord library guitar d.php" class="list-group-item musictheory-lesson3-title">D chord</a>
        <a href="chord library guitar d thang.php" class="list-group-item musictheory-lesson4-title">D# chord</a>
        <a href="chord library guitar e.php" class="list-group-item musictheory-lesson5-title">E chord</a>
        <a href="chord library guitar f.php" class="list-group-item musictheory-lesson6-title">F chord</a>
        <a href="chord library guitar f thang.php" class="list-group-item musictheory-lesson7-title">F# chord</a>
        <a href="chord library guitar g.php" class="list-group-item musictheory-lesson8-title">G chord</a>
        <a href="#" class="list-group-item musictheory-game-title">G# chord</a>
        <a href="#" class="list-group-item musictheory-lesson8-title">A chord</a>
        <a href="#" class="list-group-item guitar-chapter4-title">A# chord</a>
        <a href="#" class="list-group-item guitar-chapter5-title">B chord</a>
      </div>

    </div>
    <!-- /.col-lg-3 -->

    <div class="col-lg-9">

      <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div class="tab" style="border-color: blue;">
        <button class="tablinks" onclick="openCity(event, 'major')">major</button>
        <button class="tablinks" onclick="openCity(event, 'minor')">minor</button>
        <button class="tablinks" onclick="openCity(event, '5')">5</button>
        <button class="tablinks" onclick="openCity(event, '7')">7</button>
        <button class="tablinks" onclick="openCity(event, 'maj7')">maj7</button>
        <button class="tablinks" onclick="openCity(event, 'm7')">m7</button>
        <button class="tablinks" onclick="openCity(event, 'sus4')">sus4</button>
        <button class="tablinks" onclick="openCity(event, 'add9')">add9</button>
        <button class="tablinks" onclick="openCity(event, 'sus2')">sus2</button>
        <button class="tablinks" onclick="openCity(event, '7sus4')">7sus4</button>
        <button class="tablinks" onclick="openCity(event, '7#9')">7#9</button>
        <button class="tablinks" onclick="openCity(event, '9')">9</button>
      </div>
      <div id="major" class="tabcontent chord-picture">
        <img src="chord library/Cthang major.jpg" class="chord-picture1">
        <img src="chord library/Cthangmajor 2.jpg" class="chord-picture1">
        <img src="chord library/Cthangmajor 3.jpg" class="chord-picture1">
        <img src="chord library/Cthangmajor 4.jpg" class="chord-picture1">
        <img src="chord library/Cthangmajor 5.jpg" class="chord-picture1">
        <img src="chord library/Cthangmajor 6.jpg" class="chord-picture1">
      </div>
      <div id="minor" class="tabcontent chord-picture">
        <img src="chord library/Cthangminor.jpg" class="chord-picture1">
        <img src="chord library/Cthangminor 1.jpg"  class="chord-picture1">
        <img src="chord library/Cthangminor 2.jpg"  class="chord-picture1">
      </div>
      <div id="5" class="tabcontent chord-picture">
        <img src="chord library/Cthang5.jpg" class="chord-picture1">
        <img src="chord library/Cthang5 1.jpg"  class="chord-picture1">
        <img src="chord library/Cthang5 2.jpg"  class="chord-picture1">
        <img src="chord library/Cthang5 3.jpg"  class="chord-picture1"> 
        <img src="chord library/Cthang5 4.jpg"  class="chord-picture1"> 
        <img src="chord library/Cthang5 5.jpg"  class="chord-picture1">
      </div>
      <div id="7" class="tabcontent chord-picture">
        <img src="chord library/Cthang7.jpg" class="chord-picture1">
        <img src="chord library/Cthang7 1.jpg"  class="chord-picture1">
        <img src="chord library/Cthang7 2.jpg"  class="chord-picture1">
        <img src="chord library/Cthang7 3.jpg"  class="chord-picture1"> 
      </div>
      <div id="maj7" class="tabcontent chord-picture">
        <img src="chord library/Cthangmaj7.jpg" class="chord-picture1">
        <img src="chord library/Cthangmaj7 1.jpg"  class="chord-picture1">
        <img src="chord library/Cthangmaj7 2.jpg"  class="chord-picture1">
        <img src="chord library/Cthangmaj7 3.jpg"  class="chord-picture1"> 
        <img src="chord library/Cthangmaj7 4.jpg"  class="chord-picture1"> 
        <img src="chord library/Cthangmaj7 5.jpg"  class="chord-picture1">
      </div>
      <div id="m7" class="tabcontent chord-picture">
        <img src="chord library/Cthangm7.jpg" class="chord-picture1">
        <img src="chord library/Cthangm7 1.jpg"  class="chord-picture1">
        <img src="chord library/Cthangm7 2.jpg"  class="chord-picture1">
      </div>
      <div id="sus4" class="tabcontent chord-picture">
        <img src="chord library/Cthangsus4.jpg" class="chord-picture1">
        <img src="chord library/Cthangsus4 1.jpg"  class="chord-picture1">
        <img src="chord library/Cthangsus4 2.jpg"  class="chord-picture1">
      </div>
      <div id="add9" class="tabcontent chord-picture">
        <img src="chord library/Cthangadd9.jpg" class="chord-picture1">
      </div>
      <div id="sus2" class="tabcontent chord-picture">
        <img src="chord library/Cthangsus2.jpg" class="chord-picture1">
        <img src="chord library/Cthangsus2 1.jpg"  class="chord-picture1">
      </div>
      <div id="7sus4" class="tabcontent chord-picture">
        <img src="chord library/Cthang7sus4.jpg" class="chord-picture1">
        <img src="chord library/Cthang7sus4 1.jpg"  class="chord-picture1">
        <img src="chord library/Cthang7sus4 2.jpg"  class="chord-picture1">
      </div>
      <div id="7#9" class="tabcontent chord-picture">
        <img src="chord library/Cthang7thang9.jpg" class="chord-picture1">
        <img src="chord library/Cthang7thang9 1.jpg"  class="chord-picture1">
      </div>
      <div id="9" class="tabcontent chord-picture">
        <img src="chord library/Cthang9.jpg" class="chord-picture1">
        <img src="chord library/Cthang9 1.jpg"  class="chord-picture1">
        <img src="chord library/Cthang9 2.jpg"  class="chord-picture1">
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

<script type="text/javascript">
  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
    if(window.matchMedia("(max-width:500px)").matches)
    {
      document.getElementById(cityName).style.display = "flex";
      document.getElementById(cityName).style.overflow = "scroll";
    }
    else
    {
      document.getElementById(cityName).style.display = "block";

    }
  }
</script>
<script type="text/javascript">
 function openCity1(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();
</script>
</body>

</html>
