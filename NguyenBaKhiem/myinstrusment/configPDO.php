<?php 




try {
	$db = new PDO("mysql:host=localhost;dbname=instrusment", "root", "");
	$db-> setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	$db->exec('set names utf8');
} catch (Exception $e) {
	$error = $e->getMessage();
	echo $error;
}

define('SITE_URL','http://yukikhiem.vn/instrustment/' );
define('PUBLICS', 'http://yukikhiem.vn/instrusment/');
//713424696230-odfmm1v6n48pg85g1chf31oefiep452q.apps.googleusercontent.com
//-2JWlen6wsepuzymQv-a5_71
?>
