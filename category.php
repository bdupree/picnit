<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
	<link rel="stylesheet" type="text/css" href="css/style.css"/>
	<link href='http://fonts.googleapis.com/css?family=Concert+One' rel='stylesheet' type='text/css'>
	<title>Category</title>
	<?php require_once('php/general.php'); ?>
	<?php require_once('php/html/topbar.php'); ?>
	<script type="text/javascript" src="js/general.js"></script>
	<script type="text/javascript" src="js/libraries/jquery-1.8.2.min.js"></script>
	<script type="text/javascript" src="js/member.js"></script>
	<script>
	window.onload = function() {
		document.getElementById('signupbut').addEventListener('click',showsignup,false);
		document.getElementById('cancel').addEventListener('click',hidesignup,false);
		document.getElementById('overlay').addEventListener('click',hidesignup,false);
		document.getElementById('imgoverlay').addEventListener('click',hideViewer,false);
		document.getElementById('testimg').addEventListener('click',showViewer,false);
	}

	function showsignup() {
		document.getElementById('overlay').style.visibility="visible";
		document.getElementById('signupbar').style.visibility="visible";
	}

	function hidesignup() {
		document.getElementById('overlay').style.visibility="hidden";
		document.getElementById('signupbar').style.visibility="hidden";
	}
	</script>
</head>
<body>
	<?php menubar(); ?>
	<div>
		<h1>category</h1>
	</div>
	<?php searchbar(); ?>
	<div id="results" class="panels">

	</div>
	<?php info(); ?>
	<?php signup(); ?>
	<?php imageview(); ?>

</body>
</html>