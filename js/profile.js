/*
 *	profile.js
 *	Author: PhotoDolo
 *
 *	Creates the dynamic content of profile.php page
 */

 function createAlbumElements(uid) {
	//Get the album information of this user
	var list = getAlbums(uid);

	//Get display area
	var disp = $("#thumbnail-display");

	//Clear the current contents
	disp.empty();
	var line="";
	for(x in list) {
		line+="<div class='dispalbum'>";
		line+="<a href='/picnit/album/"+list[x]['album_id']+"'>";
		line+=list[x]['name'];
		line+="</a>"
		line+="<div id='albumdate'>"+list[x]['date_created']+"</div>";
		line+="<p><div>";
		line+=list[x]['description'];
		line+="</div></p>";
		line+="</div>";
		//list[x]['description'];
		//list[x]['date_created'];
		//list[x]['owner_id'];
		//list[x]['album_id'];
	}
	disp.html(line);
 }

 function createAlbumImagesElements(album_id) {
	//Get the photos
	var list = getImages(album_id);

	//Get display area
	var disp = $('#image-holder');

	//Clear current content
	disp.empty();

	//Insert code
	var line="";
	for(x in list) {
		line+="<div class='dispimage'>";
		line+="<img src='data:" + list[x]['image_type'] + ";base64," + list[x]['image'] + "' alt='" + list[x]['name'] + "'/>";
		line+="<input type='button' id='picdelbut' class='buttons' value='delete'/>";
		line+="<input type='button' id='picfavbut' class='buttons' value='favorite'/>";
		line+="<input type='button' id='pictagbut' class='buttons' value='tag'/>";
		line+="</div>";
	}
	disp.html(line);
 }

 function createFlexsliderElements(num,user_id) {
	//Get the photos
	var list = getLastImages(num,user_id);

	//Get display area
	var disp = $('.slides');
	
	var line="";
	for(x in list) {
		line+="<li>";
		line+="<img src='data:" + list[x]['image_type'] + ";base64," + list[x]['image'] + "' alt='" + list[x]['name'] + "'/>";
		line+="</li>";
	}
	disp.html(line);
 }

 function createFavoritesElements() {
	//Get the album information of this user
	var list = getFavorites();

	//Get display area
	var disp = $("#thumbnail-display");

	//Clear the current contents
	disp.empty();
	var line="";
	for(x in list) {
		line += "<div class='dispfav'>";
		line += list[x].toString();
		line += "</div>";
	}
	disp.html(line);
 }

function createTaggedElements() {
	//Get the tagged elements
	var list = null;

	//Get display area
	var disp = $("#thumbnail-display");

	//Clear the current contents
	disp.empty();
	var line="";
	for(x in list) {
		line += "<div class='disptagged'>";
		line += list[x].toString();
		line += "</div>";
	}
}

function createFollowersElements() {
	//Get the tagged elements
	var list = null;

	//Get display area
	var disp = $("#thumbnail-display");

	//Clear the current contents
	disp.empty();
	var line="";
	for(x in list) {
		line += "<div class='dispfollowers'>";
		line += list[x].toString();
		line += "</div>";
	}
}

function createFolloweesElements() {
	//Get the tagged elements
	var list = null;

	//Get display area
	var disp = $("#thumbnail-display");

	//Clear the current contents
	disp.empty();
	var line="";
	for(x in list) {
		line += "<div class='dispfollowees'>";
		line += list[x].toString();
		line += "</div>";
	}
}

function createFollowReqElements() {
	//Get the tagged elements
	var list = null;

	//Get display area
	var disp = $("#thumbnail-display");

	//Clear the current contents
	disp.empty();
	var line="";
	for(x in list) {
		line += "<div class='dispfollowreq'>";
		line += list[x].toString();
		line += "</div>";
	}
}
