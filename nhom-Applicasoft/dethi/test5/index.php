<?php require_once '../config.php';?>
<!DOCTYPE html>
<html>
    <head><title>ĐỀ THI- Đề 3</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="shortcut icon" href="../../images/logo.png" type="image/x-icon" />
    <link rel="stylesheet" type="text/css" href="../css/style.css" />
    <link rel="stylesheet" href="../../css/bootstrap-4.0.0-alpha.6-dist/css/bootstrap.min.css">
	<script src="../js/jquery-1.9.1.min.js"></script>
	<script src="../js/watch.js"></script>
    <script src="../js/main.js"></script>

</head>
<body>
	<header>
	        <img class="img-fluid" src="../../images/banner1.png" alt="">
	        <nav class="navbar navbar-expand-md bg-dark navbar-dark ">
	            <div class="container">
	                  <a class="navbar-brand" href="../../index.html">
	                    <img src="../../images/logo.png" alt="Logo" style="width:40px;">
	                  </a>
	                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
	                    <span class="navbar-toggler-icon"></span>
	                  </button>
	                <div class="collapse navbar-collapse" id="collapsibleNavbar">
	                    <ul class="navbar-nav">
	                      <li class="nav-item">
	                        <a class="nav-link" href="../../dethi/">Đề thi</a>
	                      </li>
	                      <li class="nav-item">
	                        <a class="nav-link" href="../../ontap/">Ôn tập</a>
	                      </li>
	                      <li class="nav-item">
	                        <a class="nav-link" href="../../dangky/">Đăng ký</a>
	                      </li>    
	                    </ul>
	                </div>  
	            </div>
	        </nav>
    	</header>
	<h1> THI THỬ TRỰC TUYẾN</h1>
	<h1>Thời gian làm bài: 15 phút</h1><br />
	<div id="demo1" class="demo" style="text-align:center;font-size: 25px;">00:00:00</div>
	<hr/>
	<div class='col-xs-9'>
	<div class="container border">
	<?php $response=mysqli_query($con,"select * from questions where made=5");?>
	
	<form method='post' id='quiz_form'>
	
	<?php while($result=mysqli_fetch_object($response)){ ?>
	
	<div id="question_<?php echo $result->id;?>" class='questions'>
	<h3 id="question_<?php echo $result->id;?>"><?php echo $result->id.". ".$result->question_name;?>
	</h3><hr/>
	<?php 
		if($result->image =='') echo '';else
		echo "<img style='display: block; margin-left: auto; margin-right: auto; border: 1px solid #ddd;' src='../image/de5/".$result->image."'>";
	?>
	<hr >
	<br />
	<div class='align'>
	<input type="radio" value="1" id='radio1_<?php echo $result->id;?>' name='<?php echo $result->id;?>'>
	A:&nbsp;<label id='ans1_<?php echo $result->id;?>' for='1'><?php echo $result->answer1;?></label>
	<br/ ><br />
	
	<input type="radio" value="2" id='radio2_<?php echo $result->id;?>' name='<?php echo $result->id;?>'>
	B:&nbsp;<label id='ans2_<?php echo $result->id;?>' for='1'><?php echo $result->answer2;?></label>
	<br/ ><br />
	<?php if($result->answer3 ==''){
		echo '';} else { ?>	
	<input type="radio" value="3" id='radio3_<?php echo $result->id;?>' name='<?php echo $result->id;?>'>
	C:&nbsp;<label id='ans3_<?php echo $result->id;?>' for='1'><?php echo $result->answer3;?></label> 
	<br/ ><br />
	<?php }; ?>
	<?php if($result->answer4 ==''){
		echo '';} else { ?>	
	<input type="radio" value="4" id='radio4_<?php echo $result->id;?>' name='<?php echo $result->id;?>'>
	D:&nbsp;<label id='ans4_<?php echo $result->id;?>' for='1'><?php echo $result->answer4;?></label> 
	<br/ ><br />
	<?php }; ?>
	<input type="radio" checked='checked' value="5" style='display:none' id='radio_<?php echo $result->id;?>' name='<?php echo $result->id;?>'>
	</div>	
	<input type="button" id='next<?php echo $result->id;?>' value='Tiếp' name='question' class='btn btn-success'/>
	</div>
	<?php }?>
	</form> 
	<div id='result'>
	</div><br>	    
	</div>
	</div>
	<br /><br /><br /><br /><br /><br /><br /><br />
</body>
</html>