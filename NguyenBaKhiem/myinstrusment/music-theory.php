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

  <title>Music theory</title>

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

      <label for="toggle"><h1 class="my-4 musictheory-title">Music theory</h1></label>
      <input type="checkbox" id="toggle"/>
      <div class="list-group menu1">
        <a href="musictheory-lesson1.php" class="list-group-item musictheory-lesson1-title">Lesson 1: Basic notes</a>
        <a href="musictheory-lesson2.php" class="list-group-item musictheory-lesson2-title">Lesson 2: Sharp and flat</a>
        <a href="#" class="list-group-item musictheory-lesson3-title">Lesson 3: Transpose and interval</a>
        <a href="#" class="list-group-item musictheory-lesson4-title">Lesson 4: Other notes</a>
        <a href="#" class="list-group-item musictheory-lesson5-title">Lesson 5: Special symbol in sheet music</a>
        <a href="#" class="list-group-item musictheory-lesson6-title">Lesson 6: Clef</a>
        <a href="#" class="list-group-item musictheory-lesson7-title">Lesson 7: Time and barline</a>
        <a href="#" class="list-group-item musictheory-lesson8-title">Lesson 8: Read whole sheet music</a>
        <a href="#" class="list-group-item musictheory-game-title">Game</a>
        <br>
        <button class="btn btn-lg btn-primary btn-block col-md-12" type="enroll" name="enroll"><a href="enroll.php?course_id=1">Enroll me</a></button>
        <br>
        <?php if (isset($_GET['success'])): ?>
          <div class="alert alert-success">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <strong>Congratulation!</strong> Enroll successful.
          </div>
        <?php elseif(isset($_GET['fail'])) : ?>
          <div class="alert alert-danger">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <strong>Fail!</strong> You have already enroll in the course.
          </div>
        <?php endif ?>
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

      <div class="row">

        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100 musictheory-lesson1">
            <a href="#"><img class="card-img-top" src="img/images (1).jpg" alt=""></a>
            <div class="card-body">
              <h4 class="card-title">
               <a class="musictheory-lesson1-title" href="musictheory-lesson1.php">Lesson 1: basic notes</a>
             </h4>
             <h5 class="card-text">Learn about basic notes and staff</h5>
           </div>
           <div class="card-footer">
            <a href ="musictheory-lesson1.php" class="btn btn-primary">Learn</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 musictheory-lesson2">
          <a href="#"><img class="card-img-top" src="img/b64d9408d06885b04911c282b738592b.jpg" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="musictheory-lesson2.php" class="musictheory-lesson2-title">Lesson 2: Sharp and flat </a>
            </h4>
            <h5 class="card-text">learn about sharp and flat</h5>
          </div>
          <div class="card-footer">
            <a href ="musictheory-lesson2.php" class="btn btn-primary">Learn</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 musictheory-lesson3">
          <a href="#"><img class="card-img-top" src="img/8oOtk3p.jpg" alt=""></a>
          <div class="card-body">
            <h4 class="card-title ">
              <a href="#" class="musictheory-lesson3-title">Lesson 3: Transpose and interval</a>
            </h4>
            <h5 class="card-text">Learn about transpose and interval</h5>
          </div>
          <div class="card-footer">
            <a href ="music theory.php" class="btn btn-primary">Learn</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 musictheory-lesson4" >
          <a href="#"><img class="card-img-top" src="img/240_F_128842692_m39LCPuNKRWzzlDmFW7rSAAHj9hhHEkt.jpg" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#" class="musictheory-lesson4-title">Lesson 4: Other notes</a>
            </h4>
            <h5 class="card-text">Learn about quaver, semiquaver, minim,....</h5>
          </div>
          <div class="card-footer">
            <a href ="music-theory.php" class="btn btn-primary">Learn</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 musictheory-lesson5">
          <a href="#"><img class="card-img-top" src="img/abstract_21 (1).jpg" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#" class="musictheory-lesson5-title">Lesson 5: Special symbol in sheet music</a>
            </h4>
            <h5 class="card-text">Learn about fermata, start repeat, end repeat,...</h5>
          </div>
          <div class="card-footer">
            <a href ="music-theory.php" class="btn btn-primary">Learn</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100  musictheory-lesson6">
          <a href="#"><img class="card-img-top" src="img/23586100dfb426c.jpg" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#" class="musictheory-lesson6-title">Lesson 6: Clef</a>
            </h4>
            <h5 class="card-text">Learn about G-clef, C-clef, F-clef, ...<h5>
            </div>
            <div class="card-footer">
              <a href ="music-theory.php" class="btn btn-primary">Learn</a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100  musictheory-lesson7">
            <a href="#"><img class="card-img-top" src="img/music-hd-wallpapers-images-11-300x200.jpg" alt=""></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#" class="musictheory-lesson7-title">Lesson 7: Time and barline</a>
              </h4>
              <h5 class="card-text">Learn about time and barline<h5>
              </div>
              <div class="card-footer">
                <a href ="music-theory.php" class="btn btn-primary">Learn</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100  musictheory-lesson8">
              <a href="#"><img class="card-img-top" src="img/music-wallpaper-hd-music-photo-music-wallpaper-46938148.jpg" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#" class="musictheory-lesson8-title">Lesson 8: Read whole sheet music</a>
                </h4>
                <h5 class="card-text">Learn how to read sheet music and some rule <h5>
                </div>
                <div class="card-footer">
                  <a href ="music-theory.php" class="btn btn-primary">Learn</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100  musictheory-game">
                <a href="#"><img class="card-img-top" src="img/Les Paul Studio Black.jpg" alt=""></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#" class="musictheory-game-title">Game</a>
                  </h4>
                  <h5 class="card-text">Reinforce the knowledge learned through the game <h5>
                  </div>
                  <div class="card-footer">
                    <a href ="music theory.php" class="btn btn-primary">Play</a>
                  </div>
                </div>
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
