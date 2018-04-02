<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php
		require_once 'config.php';

		$response=mysqli_query($con,"select id,question_name,answer from questions");
			 $i=1;
			 $right_answer=0;
			 $wrong_answer=0;
			 $unanswered=0;
			 while($result=mysqli_fetch_object($response)){ 
			       if($result->answer==$_POST["$i"]){
				       $right_answer++;
				   }else if($_POST["$i"]==5){
				       $unanswered++;
				   }
				   else{
				       $wrong_answer++;
				   }
				   $i++;
			 }
			 echo "<div id='answer'>";
			 echo " Số lần đúng  : <span class='highlight'>". $right_answer."</span><br>";

			 echo " Số lần sai  : <span class='highlight'>". $wrong_answer."</span><br>";

			 echo " Số câu hỏi không trả lời  : <span class='highlight'>". $unanswered."</span><br>";
	?>
	<br/ ><br /><br />
	<a href=index.html class="btn btn-outline-light text-dark butt" role="button">RETURN HOME</a>
</div>

</body>
</html>
