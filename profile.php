<!DOCTYPE html>
<?php
	//Get general.php for DB calls
	require_once('php/general.php');

	//Check log in
	if(!isLoggedIn())
		header('Location: index.php');
	
	//See if this user exists

?>
<html>
<title><?php echo  $_GET['username']; ?>'s profile!</title>
<head>
	<?php require_once('php/general.php'); ?>
	<?php require_once('php/html/topbar.php'); ?>
	<link rel="stylesheet" href="css/style.css" type="text/css">
	<link rel="stylesheet" href="css/flexslider.css" type="text/css">
	<link href='http://fonts.googleapis.com/css?family=Concert+One' rel='stylesheet' type='text/css'>
	<script type="text/javascript" src="js/libraries/jquery-1.8.2.min.js"></script>
	<script type="text/javascript" src="js/libraries/jquery.flexslider-min.js"></script>
	<script type="text/javascript" src="js/general.js"></script>
	<script type="text/javascript" src="js/member.js"></script>
	<script type="text/javascript" src="js/album.js"></script>
	<script>
		window.onload = function() {
			if(isLoggedIn()) {
				document.getElementById('imgoverlay').addEventListener('click',hideViewer,false);
				document.getElementById('albcancel').addEventListener('click',hideAlbumCreator,false);
				document.getElementById('albumoverlay').addEventListener('click',hideAlbumCreator,false);
				document.getElementById('albumbut').addEventListener('click',showAlbumCreator,false);
			}
			else {
				document.getElementById('signupbut').addEventListener('click',showsignup,false);
				document.getElementById('cancel').addEventListener('click',hidesignup,false);
				document.getElementById('overlay').addEventListener('click',hidesignup,false);
				document.getElementById('imgoverlay').addEventListener('click',hideViewer,false);
				document.getElementById('albcancel').addEventListener('click',hideAlbumCreator,false);
				document.getElementById('albumoverlay').addEventListener('click',hideAlbumCreator,false);
				document.getElementById('albumbut').addEventListener('click',showAlbumCreator,false);
			}
		}
	</script>
</head>
<body>
	<?php menubar(); ?>
	<div>
		<h1><?php echo  $_GET['username']; ?>'s profile</h1>
	</div>
	<?php searchbar(); ?>
	<div id="slideshow" class="flexslider">
		<ul class="slides">
			<li>
	      			<img src="images/300px-Leuk01.jpg" />
	    		</li>
	    		<li>
	      			<img src="images/dark_energy_camera_images.jpg" />
	    		</li>
	    		<li>
	      			<img src="images/help_clip_image020.jpg" />
	    		</li>
	  	</ul>
	</div>
	<div id="user-image-collection">
		<div id="collection" class="panels">
			<div id="usermenu" class="panels">
				<input id="albumsbut" class="buttons" type="button" value="Albums"/>
				<input id="picsbut" class="buttons" type="button" value="Pics"/>
				<input id="followersbut" class="buttons" type="button" value="Followers"/>
				<input id="favoritebut" class="buttons" type="button" value="Favorites"/>
				<input id="taggedbut" class="buttons" type="button" value="Tagged"/>
				<input id="followeesbut" class="buttons" type="button" value="Followees"/>
				<input id="requestsbut" class="buttons" type="button" value="Requests"/>
				
			</div>
			<input id="uploadbut" class="buttons" type="button" value="Upload"/> 
			<input id="albumbut" class="buttons" type="button" value="Add Album"/>
			<input id="followuserbut" class="buttons" type="button" value="Follow"/>
			<input id="suspenduserbut" class="buttons" type="button" value="Suspend"/>
			<div id="thumbnail-display">
				<img src="images/AlArBdr.gif" alt="Pulpit rock" width="50" height="50">
				<img src="images/article-0-14C152E0000005DC-964_964x764.jpg" alt="Pulpit rock" width="50" height=50">
				<img src="images/FD_image.jpg" alt="Pulpit rock" width="50" height="50">
				<img src="images/image16.gif" alt="Pulpit rock" width="50" height="50">
				<img src="images/pia12832-browse.jpg" alt="Pulpit rock" width="50" height="50">
			</div>
		</div>
	</div>
	<?php info(); ?>
	<?php imageview(); ?>
	<?php albumcreator(); ?>
	
</body>
</html>
