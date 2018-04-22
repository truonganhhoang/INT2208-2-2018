<!DOCTYPE html>
<html lang="en">
<head>
	<title>Tinycards</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/jquery.flip.js"></script>
	<script type="text/javascript" src="js/flip.js"></script>
	<style>
		@font-face {
			font-family: TinycardsFont;
			src: url("fonts/DINNextRoundedLTPro-Bold.woff2");
		}
	</style>
</head>
<body style="font-family: TinycardsFont; background-color: #F7F7F7">
	<!-- header -->
	<header>
		<div class="container-fluid" style="background-color: #32CDFF">
			<nav class="navbar navbar-expand-sm fixed-top" style="background-color: #32CDFF">
				<div class="container">
					<a class="navbar-brand" href="index.php">
				    	<img src="images/icon.png" alt="logo" style="width:40px;">
				    	<b style="font-size: 30px; color: white">tinycards</b>
				  	</a>  	
				</div>
			</nav>
		</div>
	</header>
	<!-- end header -->

	<div class="container" style="margin-top: 100px;">
		<div class="row">
			<div class="col-3">
				<div class="card" style="width:250px">
				    <img class="card-img-top" src="images/5.png" width="200px" alt="Card image">
				    <div class="card-body">
				      	<h4 class="card-title">First 20 Elements</h4>
				      	<p class="card-text">Learn the first 20 elements' symbols, atomic mass, and atomic number!</p>
				    </div>
				</div>
			</div>
			<div class="col-9 imgborder" style="background-color: #FFFFFF; height: 800px">
				<div>
					<ul class="nav nav-tabs" role="tablist">
						<li class="nav-item">
							<a class="nav-link active" data-toggle="tab" href="#menu1">Lessons</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#menu2">Card (20)</a>
						</li>
					</ul>
				</div>
				<div class="tab-content">
					<div id="menu1" class="tab-pane active"><br>
						<div class="row">
							<div class="col">
								<a class="link" href="1-1-1.html">
									<div class="card-lessons">
										<p>Lesson 1</p>
									</div>
								</a>
							</div>
							<div class="col">
								<a class="link" href="1-1-2.html">
									<div class="card-lessons">
										<p>Lesson 2</p>
									</div>
								</a>
							</div>
							<div class="col">
								<a class="link" href="1-1-3.html">
									<div class="card-lessons">
										<p>Lesson 3</p>
									</div>
								</a>
							</div>
						</div>
						<div class="row" style="margin-top: 40px">
							<div class="col-4">
								<a class="link" href="1-1-4.html">
									<div class="card-lessons">
										<p>Lesson 4</p>
									</div>
								</a>
							</div>
							<div class="col-4">
								<a class="link" href="1-1-5.html">
									<div class="card-lessons">
										<p>Lesson 5</p>
									</div>
								</a>
							</div>
						</div>

					</div>
					<div id="menu2" class="tab-pane fade"><br>
						<div id="gird-container" class="row" style="margin-top: 40px">
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/1.png">
									</div>
									<div class="back">
										<h1>1.01</h1>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/2.png">
									</div>
									<div class="back">
										<h1>4.00</h1>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/3.png">
									</div>
									<div class="back">
										<h1>6.94</h1>
									</div>
								</div>
							</div>
						</div>
						<div class="row" style="margin-top: 40px">
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/4.png">
									</div>
									<div class="back">
										<h1>9.01</h1>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/5.png">
									</div>
									<div class="back">
										<h1>10.81</h1>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/6.png">
									</div>
									<div class="back">
										<h1>12.01</h1>
									</div>
								</div>
							</div>
						</div>
						<div class="row" style="margin-top: 40px">
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/7.png">
									</div>
									<div class="back">
										<h1>14.01</h1>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/8.png">
									</div>
									<div class="back">
										<h1>16.00</h1>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/9.png">
									</div>
									<div class="back">
										<h1>19.00</h1>
									</div>
								</div>
							</div>
						</div>
						<div class="row" style="margin-top: 40px">
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/10.png">
									</div>
									<div class="back">
										<h1>20.18</h1>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/11.png">
									</div>
									<div class="back">
										<h1>22.99</h1>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/12.png">
									</div>
									<div class="back">
										<h1>24.31</h1>
									</div>
								</div>
							</div>
						</div>
						<div class="row" style="margin-top: 40px">
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/13.png">
									</div>
									<div class="back">
										<h1>26.98</h1>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/14.png">
									</div>
									<div class="back">
										<h1>28.09</h1>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/15.png">
									</div>
									<div class="back">
										<h1>30.97</h1>
									</div>
								</div>
							</div>
						</div>
						<div class="row" style="margin-top: 40px">
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/16.png">
									</div>
									<div class="back">
										<h1>32.07</h1>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/17.png">
									</div>
									<div class="back">
										<h1>35.45</h1>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/18.png">
									</div>
									<div class="back">
										<h1>39.95</h1>
									</div>
								</div>
							</div>
						</div>
						<div class="row" style="margin-top: 40px">
							<div class="col-4">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/19.png">
									</div>
									<div class="back">
										<h1>39.10</h1>
									</div>
								</div>
							</div>
							<div class="col-4">
								<div class="card-gird">
									<div class="front">
										<img src="images/20elements/20.png">
									</div>
									<div class="back">
										<h1>40.08</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</body>

</html>