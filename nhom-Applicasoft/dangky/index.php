<!DOCTYPE html>
<html>
<head>
	<title>Success</title>
	<meta charset="utf-8" />
	<link rel="shortcut icon" href="../images/logo.png" type="image/x-icon">
	<link rel="stylesheet"  href="../css/bootstrap-4.0.0-alpha.6-dist/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	
</head>
<body>
	<header>
        <img class="img-fluid" src="../images/banner1.png" alt="">
        <div class="intro-text">
        </div>
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark box-shadow">
            <a href="../index.html"><img src="../images/logo.png" style="height: 40px;width: 40px;"></a>
            <h5 class="my-0 mr-md-auto font-weight-normal" style="color: white">&nbsp;&nbsp;ASP.com</h5>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
              <ul class="navbar-nav">
        <li class="nav-item">
                  <a class="nav-link " href="../index.html">Trang chủ</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../dethi/index.html">Đề thi</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="../dangky/index.html">Đăng ký</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../ontap/index.html">Ôn tập</a>
                </li>
              </ul>
            </nav>

        </div>
    </header>
	<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
	<div class="container">
		<div class="text-center">
			<div class="alert alert-success">
				<button type="button" class="close" data-dismiss="alert" aria-hidden="true">
				</button>
				<span class="fa fa-check"> </span>
				<strong>Đăng ký thành công</strong>
			</div><br/>
			<button type="button" class="btn btn-success btn-lg btn3d">
				<span class="fa fa-reply">	</span>
				<a href="../index.html" style="text-decoration: none;color: #fff"> Quay lại trang chủ</a>
			</button>
		</div>
	</div>	
	<?php
		require_once('config.php');
	?>
	<?php
		if(isset($_POST['submit'])){
			mysqli_query($con,"INSERT INTO informationTable VALUES (
					'',
					'".$_POST['username']."',
					'".$_POST['birthday']."',
					'".$_POST['gender']."',
					".$_POST['identify'].",
					'".$_POST['dateofid']."',
					'".$_POST['adress']."',
					".$_POST['phone'].",
					'".$_POST['email']."',
					'".$_POST['images']."'
				)");
		}
	?>
	
</body>
</html>
