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

  <title>Contact</title>

  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.css" rel="stylesheet">

  <!-- Custom styles for this template -->

  <link href="css/bootstrap-social.css" rel="stylesheet">
  <link href="css/font-awesome.css" rel="stylesheet">
  <link href="css/modern-business.css" rel="stylesheet">
  <link href="css/small-business.css" rel="stylesheet">
  <link rel="stylesheet" href="css/sidenavuser.css">
</head>

<body>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <a href="#">Hồ sơ</a>
      <div class="row">
        <button class="col-md-5 col-lg-5 col-sm-12 col-10"><a href="../myinstrusment/logout.php?action=logout">Sign Out</a></button>
        <button class="col-md-5 col-lg-5 col-sm-12 col-10"><a href="../myinstrusment/login.php">Sign In</a></button>
      </div>
    </div>
    <div class="container">
      <a class="navbar-brand" href="../myinstrusment/" title="home"><img src="images/myinstrucment4.jpg" class = "menupicture" ></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
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
                echo 'SignIn';
              }

              ?> </a>
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
                  <a class="dropdown-item guitar-title" href="chord library guitar c.php">Guitar</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item piano-title" href="#">Piano</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item violin-title" href="#">Violin</a>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <div class="container">

      <!-- Page Heading/Breadcrumbs -->
      <h1 class="mt-4 mb-3">Contact
      </h1>

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="../myinstrusment/">Home</a>
        </li>
        <li class="breadcrumb-item active">Contact</li>
      </ol>

      <!-- Content Row -->
      <div class="row">
        <!-- Map Column -->
        <div class="col-lg-8 mb-4">
          <!-- Embedded Google Map -->
          <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"></iframe>
        </div>
        <!-- Contact Details Column -->
        <div class="col-lg-4 mb-4">
          <h3>Contact detail</h3>
          <p>Hoàng Mạnh Hưng
            <br>The leader of 320 studio team
            <br>University of engineer and technology ,Ha Noi ,Viet Nam
          </p>
          <p>
            <abbr title="Phone">Phone</abbr>:  01 629 515 xxx
          </p>
          <p>
            <abbr title="Email">Email</abbr>:
            <a href="mailto:name@example.com">chaobalder01@gmail.com
            </a>
          </p>
          <p>
            <abbr title="Hours">Time</abbr>: Monday - Friday: 9:00 AM to 5:00 PM
          </p>
        </div>
      </div>
      <!-- /.row -->

      <!-- Contact Form -->
      <!-- In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
      <div class="row">
        <div class="col-lg-8 mb-4">
          <h3>Send us a Message</h3>
          <form name="sentMessage" id="contactForm" method="POST" action="#">
            <div class="control-group form-group">
              <div class="controls">
                <label>Full Name:</label>
                <input type="text" class="form-control" id="name"  data-validation-required-message="Please enter your name.">
                <p class="help-block"></p>
              </div>
            </div>
            <div class="control-group form-group">
              <div class="controls">
                <label>Phone Number:</label>
                <input type="tel" class="form-control" id="phone"  data-validation-required-message="Please enter your phone number.">
              </div>
            </div>
            <div class="control-group form-group">
              <div class="controls">
                <label>Email Address:</label>
                <input type="email" class="form-control" id="email"  data-validation-required-message="Please enter your email address.">
              </div>
            </div>
            <div class="control-group form-group">
              <div class="controls">
                <label>Message:</label>
                <textarea rows="10" cols="100" class="form-control" id="message" data-validation-required-message="Please enter your message" maxlength="999" style="resize:none"></textarea>
              </div>
            </div>
            <div id="success"></div>
            <!-- For success/fail messages -->
            <button type="submit"  name="submit"  class="btn btn-primary" id="sendMessageButton">Send Message</button>
          </form>
        </div>

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
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/sidenav.js"></script>
    <!-- Contact form JavaScript -->
    <!-- Do not edit these files! In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
  </body>

  </html>
