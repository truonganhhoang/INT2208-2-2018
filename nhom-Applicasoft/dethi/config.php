<?php
define('DB_HOST', 'localhost');
define('DB_NAME', 'applicasoft');
define('DB_USER','root');
define('DB_PASSWORD','thuhoa291998');
 
$con=mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD) or die("Failed to connect to MySQL: " . mysql_error());
$db=mysqli_select_db($con,DB_NAME) or die("Failed to connect to MySQL: " . mysql_error());
 
mysqli_query ($con,"set character_set_client='utf8'"); 
mysqli_query ($con,"set character_set_results='utf8'"); 
mysqli_query ($con,"set collation_connection='utf8_general_ci'"); 
 
?>