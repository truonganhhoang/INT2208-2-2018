<!DOCTYPE html>
<html>
<head>
	<title>KET QUA</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    	<link rel="stylesheet" href="../css/bootstrap-4.0.0-alpha.6-dist/css/bootstrap.min.css">
    	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
	<?php
		require_once '../config.php';
		$response=mysqli_query($con,"select id,question_name,answer from questions where made=4");
			 $i=1;
			 $right_answer=0;
			 $wrong_answer=0;
			 $unanswered=0;
			 while($result=mysqli_fetch_object($response)){ 
			       if($result->answer==$_POST["$i"]){
				       $right_answer++;
				   }else if ($_POST["$i"]==5){
				       $unanswered++;
				   }
				   else {
				       $wrong_answer++;
				   }
				   $i++;
			 }
			 echo "<div class='text'>";
			 echo " Số lần đúng  : <span style='color:red'>".$right_answer."</span><br>";

			 echo " Số lần sai  : <span style='color:red'>".$wrong_answer."</span><br>";

			 echo " Số câu hỏi không trả lời  : <span style='color:red'>". $unanswered."</span><br>";
	?>
	<br/ ><br /><br />
	<button type="button" class="btn btn-success btn-lg btn3d">
				<span class="fa fa-reply">	</span>
				<a href="../" style="text-decoration: none;color: #fff"> Quay lại trang chủ</a>
			</button>
</div>

</body>
</html>
