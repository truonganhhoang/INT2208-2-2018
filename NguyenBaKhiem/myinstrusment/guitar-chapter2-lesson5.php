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

  <title>Guitar-chapter2-lesson5</title>

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
     <h2 class="guitar-chapter2-lesson5-title" style="padding-left: 10px;">Lesson 5: How to tune the guitar</h2>
     <h5 class="title-row">Now that you are on your way to playing, it’s important to learn how to tune a guitar. The instrument can easily fall out of tune due to changes in the temperature, environment and regular playing…and when it does, you will hear that your songs seem to sound off-key.</h5>
     <div class="col-lg-4 col-md-6 mb-4 box-border">
      <div class="card h-100 title-border">
        <div class="card-body">
          <h4 class="card-title">
            <a href="#" class="title-color"> Electric Tuner</a>
          </h4>
          <h5 class="card-text">This is one of the easiest ways to tune a guitar. Instead of using the strings to find the correct tones for other strings, an electric tuner will read and interpret the sound waves it picks up from your guitar and display in notes what it reads. Just turn on the tuner and strum the string. It’ll tell you if your guitar is in tune within a few a seconds.</h5>
          <div class=" guitar-chapter2-lesson5-picture">
            <img src="img/EC736-1.jpg" class="guitar-chapter2-lesson5-picture1">
            <img src="img/T-47-4.jpg" class="guitar-chapter2-lesson5-picture2">
          </div>
          <h5 style="margin-top: 15px"><span style="color: red"><strong>or</strong></span> , you can use guitar tuner sofware </h5>
          <h5>This way you will not have to buy a tuner and still be able to tune in very simply, it works just like a normal tuner, but most software now measures the string by capturing the strings. As most people now own smart phone, laptop should find yourself a software tuning is not difficult but the weakness of the software is that if you are in noisy place will not be able to correct the rope properly.</h5>
          <h5>I recommend you <span style="color: blue">guitar tuna</span>, this sofware can also help you play chord and game to remember chord, chord's library.</h5>
          <img src="img/unnamed (1).png" class="guitar-chapter2-lesson5-picture3">
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 mb-4 box-border">
      <div class="card h-100 title-border">
        <div class="card-body">
          <h4 class="card-title">
            <a href="#" class="title-color">By Ear</a>
          </h4>
          <h5>To tune a guitar the old-fashioned way, first tune the 6th string to low E. If you already know this pitch, tune on. You may want to go online to find samples of a low E. If you’re playing with others, you may want to have one person tune, then the rest tune to match that person’s tune.</h5>
          <h5>Pluck your tuned low E string with your right hand (for right-handed, standard guitar players—lefties playing left-handed guitars should reverse this) while holding the string down with your left hand at the 5th fret (starting from the headstock, count 5 frets up toward the body.) The tone that emanates, because you are holding the string down at the 5th fret, will be an A.</h5>
          <h5>Pluck the open string below it (“open” meaning, not holding down the string on any frets with your left hand) and turn the second tuning peg until your A string produces the same tone as your low E string when played at the 5th fret. Following suit, you’ll play the A string at the 5th fret to find the correct tone for the D string, the D string at the 5th fret to find the G string, but when you’re ready to tune your B string, you’ll play the G string at the 4th fret instead of the 5th.</h5>
          <h5>To tune the last high E string, you’ll move back to the 5th fret where you’ll play the B string to find your high E tone. Got it? It’s pretty easy once you do it a couple of times. The down side to tuning your guitar this way is you may not be in “standard 440.” Tuning to A 440 assures you of being in tune with other guitars all around the world.</h5>
        </div>
      </div>
    </div>
    
    <div class="card-footer card-footer-border">
      <a href ="guitar-chapter2-lesson4.php" class="btn btn-primary btn-lesson-previous">PREIOUS: Notes on guitar</a>
      <a href ="guitar-chapter2-lesson6.php" class="btn btn-primary btn-lesson-next">NEXT: Game</a>
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
