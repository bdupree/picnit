/*
	tag.js
	Author: PhotoDolo

	Contains functions that communicate with the tag API
*/

//URL for member functions
var searchurl='/picnit/api/search.php';
var imageurl='/picnit/api/image.php';

//Request to be sent to the middleware
var request;

function filterMembers(input) {
	//Gather post request data
	var params = new Array();
	params['action'] = 'filterMembers';
	params['username'] = getCookie('username');
	params['key'] = getCookie('key');
	params['name'] = input;

	//Send request
	request = picnitRequest(searchurl, params);

	//Good data, show image created
	if(request.status === 200) {
		return $.parseJSON(request.responseText);
	}
	//Error
	else {

	}

	return null;
}

function getImagesByName(input) {
	//Gather post request data
	var params = new Array();
	params['action'] = 'getImagesByName';
	params['username'] = getCookie('username');
	params['key'] = getCookie('key');
	params['name'] = input;

	//Send request
	request = picnitRequest(searchurl, params);

	//Good data, show image created
	if(request.status === 200) {
		return $.parseJSON(request.responseText);
	}
	//Error
	else {

	}

	return null;
}

function getAlbumsByName(input) {
	//Gather post request data
	var params = new Array();
	params['action'] = 'getAlbumsByName';
	params['username'] = getCookie('username');
	params['key'] = getCookie('key');
	params['name'] = input;

	//Send request
	request = picnitRequest(searchurl, params);

	//Good data, show image created
	if(request.status === 200) {
		return $.parseJSON(request.responseText);
	}
	//Error
	else {

	}

	return null;
}

function getImagesByCategory(input) {
	//Gather post request data
	var params = new Array();
	params['action'] = 'getImagesByCategory';
	params['username'] = getCookie('username');
	params['key'] = getCookie('key');
	params['name'] = input;

	//Send request
	request = picnitRequest(searchurl, params);

	//Good data, show image created
	if(request.status === 200) {
		return $.parseJSON(request.responseText);
	}
	//Error
	else {

	}

	return null;
}
