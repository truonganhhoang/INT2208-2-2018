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

  <title>Music theory lesson2</title>

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
              <a class="dropdown-item musictheory-title" href="music theory.php">Music theory</a>
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
     <label for="toggle"><h1 class="my-4 musictheory-title">Music theory</h1></label>
     <input type="checkbox" id="toggle"/>
     <div class="list-group menu1">
      <a href="musictheory-lesson1.php" class="list-group-item musictheory-lesson1-title">Lesson 1: Basic notes</a>
      <a href="#" class="list-group-item musictheory-lesson2-title"><u>Lesson 2: Sharp and flat</u></a>
      <a href="#" class="list-group-item musictheory-lesson3-title">Lesson 3: Transpose and interval</a>
      <a href="#" class="list-group-item musictheory-lesson4-title">Lesson 4: Other notes</a>
      <a href="#" class="list-group-item musictheory-lesson5-title">Lesson 5: Special symbol in sheet music</a>
      <a href="#" class="list-group-item musictheory-lesson6-title">Lesson 6: Clef</a>
      <a href="#" class="list-group-item musictheory-lesson7-title">Lesson 7: Time and barline</a>
      <a href="#" class="list-group-item musictheory-lesson8-title">Lesson 8: Read whole sheet music</a>
      <a href="#" class="list-group-item musictheory-game-title">Game</a>
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

    <div class="row row1">
     <h2 class="musictheory-lesson2-title" style="padding-left: 10px;">Lesson 2: Sharp and flat</h2>
     <h5 class="title-row">Right guitar positioning is the one that feels natural and comfortable to you, your muscles are relaxed and there's no unnecessary tension. Guitar position can be standing or sitting:</h5>
     <div class="col-lg-4 col-md-6 mb-4 box-border">
      <div class="card h-100 title-border">
        <div class="card-body">
          <h4 class="card-title">
            <a href="#" class="title-color">The flat</a>
          </h4>
          <h5 class="card-text">In music, flat, or bemolle (Italian: "soft B") means "lower in pitch". In music notation, the flat symbol, ♭, derived from a stylised lowercase "b", lowers a note by a half step (semitone).Intonation or tuning is said to be flat when it is below the intended pitch.</h5>
          <img src="img/flat-and-double-flat-sign.png" class="musictheory-lesson1-picture">
          <h5>The order of flats in the key signatures of music notation, following the circle of fifths, is B♭, E♭, A♭, D♭, G♭, C♭ and F♭ (mnemonics for which include Battle Ends And Down Goes Charles' Father and Before Eating A Doughnut Get Coffee First).</h5>
          <h5>The vertical position of the notehead on the staff indicates which note to play: higher-pitched notes are marked higher on the staff. The notehead can be placed with its center intersecting a line (on a line) or in between the lines touching the lines above and below (in a space). Notes outside the range of the staff are placed on or between ledger lines—lines the width of the note they need to hold—added above or below the staff.</h5>
          <img src="img/400px-Staff_lines_and_spaces_SVG.svg.png" class="musictheory-lesson1-picture">
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 mb-4 box-border">
      <div class="card h-100 title-border">
        <div class="card-body">
          <h4 class="card-title">
            <a href="#" class="title-color">Notes Written on the Staff</a>
          </h4>
          <h5 class="card-text">In music, a note is the pitch and duration of a sound, and also its representation in musical notation (♪, ♩). A note can also represent a pitch class. Notes are the building blocks of much written music: discretizations of musical phenomena that facilitate performance, comprehension, and analysis.</h5>
          <img src="img/notestem-39a00b5d.png" class="musictheory-lesson1-picture">
          <h5>In traditional music theory, most countries in the world use the solfège naming convention Do–Re–Mi–Fa–Sol–La–Si, including for instance Italy, Portugal, Spain, France, Romania, most Latin American countries, Greece, Bulgaria, Turkey, Russia, and all the Arabic-speaking or Persian-speaking countries. However, within the English-speaking and Dutch-speaking world, pitch classes are typically represented by the first seven letters of the Latin alphabet (A, B, C, D, E, F and G)</h5>
          <img src="img/220px-Cifrado_americano.JPG" class="musictheory-lesson1-picture">
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 mb-4 box-border">
      <div class="card h-100 title-border">
        <div class="card-body">
          <h4 class="card-title">
            <a href="#" class="title-color">Ledger Lines</a>
          </h4>
          <h5 class="card-text">Ledger lines extend above and below the staff, allowing for higher or lower notes to be shown than would otherwise fit on the staff. These lines follow the same musical alphabet pattern as the staff does. Think of them as just extra lines and spaces on the end of the staff.</h5>
          <img src="img/ledger-dd5eafca.png" class="musictheory-lesson1-picture">
          <h5>The stems of notes on ledger lines extend either up or down towards the middle line.</h5>
        </div>
      </div>
    </div>

    <div class="card-footer card-footer-border">
      <a href ="musictheory-lesson1.php" class="btn btn-primary btn-lesson-previous">PREIOUS: Basic notes</a>
    </div>
    
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
