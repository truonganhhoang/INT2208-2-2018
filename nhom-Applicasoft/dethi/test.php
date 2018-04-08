<?php require_once 'config.php';?>
<!DOCTYPE html>
<html>
    <head><title>de 1</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="shortcut icon" href="../images/logo.png" type="image/x-icon" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
	<script src="js/jquery-1.9.1.min.js"></script>
	<script src="js/watch.js"></script>
    <script src="js/main.js"></script>

</head>
<body>

	<h1>Hãy trả lời những câu hỏi bên dưới và kiểm tra</h1>
	<h1>Thời gian làm bài : 20 phút</h1>
	<div id="demo1" class="demo" style="text-align:center;font-size: 25px;">00:00:00</div>

	<?php $response=mysqli_query($con,"select * from questions");?>
	
	<form method='post' id='quiz_form'>
	
	<?php while($result=mysqli_fetch_object($response)){ ?>
	
	<div id="question_<?php echo $result->id;?>" class='questions'>
	<h2 id="question_<?php echo $result->id;?>"><?php echo $result->id.".".$result->question_name;?></h2>
	
	<div class='align'>
	<input type="radio" value="1" id='radio1_<?php echo $result->id;?>' name='<?php echo $result->id;?>'>
	<label id='ans1_<?php echo $result->id;?>' for='1'><?php echo $result->answer1;?></label>
	<br/ ><br />
	
	<input type="radio" value="2" id='radio2_<?php echo $result->id;?>' name='<?php echo $result->id;?>'>
	<label id='ans2_<?php echo $result->id;?>' for='1'><?php echo $result->answer2;?></label>
	<br/ ><br />
	
	<input type="radio" value="3" id='radio3_<?php echo $result->id;?>' name='<?php echo $result->id;?>'>
	<label id='ans3_<?php echo $result->id;?>' for='1'><?php echo $result->answer3;?></label>
	<br/ ><br />
	
	<input type="radio" checked='checked' value="5" style='display:none' id='radio_<?php echo $result->id;?>' name='<?php echo $result->id;?>'>
	</div>
	<br/>
	
	<input type="button" id='next<?php echo $result->id;?>' value='Tiếp' name='question' class='butt'/>
	</div>
	
	<?php }?>
	
	</form>
	    
	<div id='result'>
	</div>	    
	
</body>
</html>
