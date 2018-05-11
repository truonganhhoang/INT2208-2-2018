<?php session_start();

if (!isset($_SESSION['username'])) {
  //header('locaion:../instrusment/');
	header('locaion:../myinstrusment/login.php');
}

?>



<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Final Test for user</title>
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/finaltest.css">
</head>
<body>
	<div class="container">
		<h1 class="ani" style="text-align:  center;">
			Final test for user
		</h1>
		<div class="row">
			<div class="col-7 col-sm-7 col-md-7 col-xl-7 col-lg-7"> 
				<form action="" method="POST">

					<?php 
					require_once 'configPDO.php';
					$query = " SELECT a.id, a.name, b.a, b.b, b.c, b.d FROM question as a INNER JOIN answer as b WHERE a.id = b.questionID";
					$result = $db->prepare($query);
					$result->execute();
					$result = $result->FetchALL(PDO:: FETCH_ASSOC);
					foreach ($result as $key => $row) {
						$id = $row['id'];
						$name = $row['name'];
						$A = $row['a'];
						$B = $row['b'];
						$C = $row['c'];
						$D = $row['d'];
						?>
						<label id="<?php echo $row['id']?>"><?php echo $row['id'].'. '.$row['name'].'<br>'; ?></label>
						<div class="radio">
							<label for="" >
								<input type="radio" name="<?php echo $id ?>" value="A" class="radio"> <?php echo "$A"; ?>
							</label>
						</div>
						<div class="radio">
							<label for="" >
								<input type="radio" name="<?php echo $id ?>" value="B" class="radio"> <?php echo "$B"; ?>
							</label>
						</div>
						<div class="radio">
							<label for="" >
								<input type="radio" name="<?php echo $id ?>" value="C" class="radio" > <?php echo "$C"; ?>
							</label>	
						</div>
						<div class="radio">
							<label for="" >
								<input type="radio" name="<?php echo $id?>" value="D" class="radio"> <?php echo "$D"; ?>
							</label>
						</div>
						<?php  } ?>
						<div>
							<input type="submit" name="submit" value="submit" class="btn btn-primary">
						</div>
					</form>
				</div>
				<div class="col-4 col-sm-4 col-md-4 col-xl-4 col-lg-4">
					<?php 
					require_once 'configPDO.php';
					$correctchoice = 0;
					if (isset($_POST['submit'])) {
						$arr = $_POST;
						foreach ($arr as $key => $value) {
							if (is_numeric($key)) {
								$query = " SELECT correct FROM question WHERE id = :id limit 1";
								$query = $db->prepare($query);
								$query->bindParam(':id', $key);
								$query->execute();
								$query= $query->fetch(PDO:: FETCH_ASSOC);
								foreach ($query as $key1 => $query) {
									$query=$query;
								}
								if ($value==$query) {
									echo "Câu {$key} đúng.".'<br>';
									$correctchoice =$correctchoice +1;
								} else {
									echo "Câu {$key} sai.".'<br>';
								}
							}
						}
						echo "Tổng số câu đúng: {$correctchoice} / 20 câu";
					}
					?>

				</div>
			</div>
		</div>
		<div class="poisition">
			<a href="#1" id="1" class="block">1</a>
			<a href="#2" id="2" class="block">2</a>
			<a href="#3" id="3" class="block">3</a>
			<a href="#4" id="4" class="block">4</a>
			<a href="#5" id="5" class="block">5</a>
			<a href="#6" id="6" class="block">6</a>
			<a href="#6" id="7" class="block">7</a>
			<a href="#8" id="8" class="block">8</a>
			<a href="#9" id="9" class="block">9</a>
			<a href="#10" id="19" class="block">10</a>
			<a href="#11" id="11" class="block">11</a>
			<a href="#12" id="12" class="block">12</a>
			<a href="#13" id="13" class="block">13</a>
			<a href="#14" id="14" class="block">14</a>
			<a href="#15" id="15" class="block">15</a>
			<a href="#16" id="16" class="block">16</a>
			<a href="#17" id="17" class="block">17</a>
			<a href="#18" id="19" class="block">18</a>
			<a href="#19" id="19" class="block">19</a>
			<a href="#20" id="20" class="block">20</a>
		</div>
		<script>
			for (var i = 0; i < 20; i++) {
				var checkbox = document.getElementsByName(i);
				if (checkbox.checked === true){
					$('input:radio[name=i]').click(function() {
						document.getElementById(i).style.color = 'red';
					});
				}
			}
		</script>
	</body>
	</html>