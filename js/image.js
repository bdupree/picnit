/*
	image .js
	Author: PhotoDolo

	Contains functions that communicate with the image API
*/

//URL for member functions
var imageurl='api/image.php';

//Request to be sent to the middleware
var request;

function getImage() {
	//Get user input, should be validated via html5
	var imagename = $("input#imagename").val();
	
	//Gather post request data
	var params = new Array();
	params['action'] = 'createAlbum';
	params['username'] = getCookie('username');
	params['key'] = getCookie('key');
	params['name'] = imagename;

	//Send request
	request = picnitRequest(imageurl, params);

	//Debug purposes
	alert(request.status + "\n" + request.responseText);

	//Good data, show image created
	if(request.status === 200) {
		
	}
	//Unauthorized
	else if(request.status === 401) {
		
	}
	//Missing data
	else if(request.status === 400) {
		
	}
	//Unknown error
	else {
		
	}

	return false;
}

function saveImage() {
	//Get photo data
	var imgobj = $("input#image").attr("files")[0];
	var phototype = imgobj.type;

	//Parse it into base64
	var photo;
	var reader = new FileReader();
	reader.onloadend = function(evt) {
		if (evt.target.readyState == FileReader.DONE) { // DONE == 2
			sendImage(evt.target.result, phototype);
		}
	}
	reader.readAsDataURL();
}

//Finish sending the image to the database to be saved
function sendImage(photo, phototype) {
	//Get user input, should be validated via html5
	var imagename = $("input#imagename").val();
	var albumid = $("input#albumid").val();
	var publicness = $("input#publicness").val();
	var desc = $("input#imagedesc").val();

	//Gather post request data
	var params = new Array();
	params['action'] = 'saveImage';
	params['username'] = getCookie('username');
	params['key'] = getCookie('key');
	params['name'] = imagename;
	params['desc'] = imagedesc;
	params['photo'] = photo;
	params['phototype'] = phototype;

	//Send request
	request = picnitRequest(imageurl, params);

	//Debug purposes
	alert(request.status + "\n" + request.responseText);

	//Good data, show image created
	if(request.status === 200) {
		
	}
	//Unauthorized
	else if(request.status === 401) {
		
	}
	//Missing data
	else if(request.status === 400) {
		
	}
	//Unknown error
	else {
		
	}

	return false;
}