/*
	member.js
	Author: PhotoDolo

	Contains functions that communicate with the member API
*/

//URL for member functions
var memberurl='/picnit/api/member.php';

//Request to be sent to the middleware
var request;

function login() {
	//Get user inputs
	var username = $("input#Username").val();
	var password = $("input#Password").val();

	//Put data into associative array, include action
	var params = new Array();
	params['action'] = 'login';
	params['username'] = username;
	params['password'] = password;

	//Send request to the API
	request = picnitRequest(memberurl, params);

	//Good data, proceed to login
	if(request.status === 200) {
		//Parse the JSON result
		var res = $.parseJSON(request.responseText);
		
		//Check for suspension
		if(res["is_suspended"] == "1") {
			logout(false);
			window.location = "./suspended.php";
			return false;
		}
		
		//Add cookies to the array
		for(var index in res)
			setCookie(index, res[index], 7);

		//Redirect to profile page
		window.location = "./profile/" + escape(res['username']);
	}
	//Invalid username/password combo
	else if(request.status === 403) {
		alert('403\n' + request.responseText);
	}
	//Our request messed up
	else if(request.status === 400) {
		alert('400\n' + request.responseText);
	}
	//Something else went wrong
	else {
		alert('Unknown error: ' + request.status);
	}

	//Return false to allow for redirection
	return false;
}

function createUser() {
	//Get user inputs, we know they are validated and that passwords match
	var params = new Array();
	params['username'] = $("input#Newusername").val();
	params['password'] = $("input#Newpassword").val();
	params['email'] = $("input#email").val();
	params['action'] = 'register';
	
	//Send request
	request = picnitRequest(memberurl, params);

	//Process requests
	if(request.status === 200) {
		return true;
	}
	else if(request.status === 409) {
		alert('409\n' + request.responseText);
	}
	else {
		alert("Unknown error: "+request.status);
	}

	return false;
}

function validatePassword(p1, p2) {
	if(p1.value != p2.value)
		p2.setCustomValidity("Doesn't match");
	else
		p2.setCustomValidity('');
}

function logout(redirect) {
	//To logout, we delete all cookies
	deleteCookie('username');
	deleteCookie('member_id');
	deleteCookie('is_suspended');
	deleteCookie('key');

	//Go back to the index
	if(redirect)
		window.location = "/picnit/";
}

function getFollowers() {
	//Gather data
	var params = new Array();
	params['action'] = 'getFollowers';
	params['key'] = getCookie('key');
	params['username'] = getCookie('username');
	
	//Send request
	request = picnitRequest(memberurl, params);

	if(request.status === 200) {
		return $.parseJSON(request.responseText);
	}
	else {

	}

	return null;
}

function getFollowees() {
	//Gather data
	var params = new Array();
	params['action'] = 'getFollowees';
	params['key'] = getCookie('key');
	params['username'] = getCookie('username');
	
	//Send request
	request = picnitRequest(memberurl, params);

	if(request.status === 200) {
		return $.parseJSON(request.responseText);
	}
	else {

	}

	return null;
}

function getFollowRequests() {
	//Gather data
	var params = new Array();
	params['action'] = 'getFollowRequests';
	params['key'] = getCookie('key');
	params['username'] = getCookie('username');
	
	//Send request
	request = picnitRequest(memberurl, params);

	if(request.status === 200) {
		return $.parseJSON(request.responseText);
	}
	else {

	}

	return null;
}

function follow(uid) {
	//Gather data
	var params = new Array();
	params['action'] = 'follow';
	params['key'] = getCookie('key');
	params['username'] = getCookie('username');
	params['user_id'] = uid;

	//Send request
	request = picnitRequest(memberurl, params);

	if(request.status === 200) {
		return true;
	}
	else {
		alert(request.status + "\n" + request.responseText);
	}

	return false;
}

function unfollow(uid) {
	//Gather data
	var params = new Array();
	params['action'] = 'unfollow';
	params['key'] = getCookie('key');
	params['username'] = getCookie('username');
	params['user_id'] = uid;

	//Send request
	request = picnitRequest(memberurl, params);

	if(request.status === 200) {
		return true;
	}
	else {
		alert(request.status + "\n" + request.responseText);
	}

	return false;
}

function requestFollow(uid) {
	//Gather data
	var params = new Array();
	params['action'] = 'requestFollow';
	params['key'] = getCookie('key');
	params['username'] = getCookie('username');
	params['user_id'] = uid;

	//Send request
	request = picnitRequest(memberurl, params);

	if(request.status === 200) {
		return true;
	}
	else {
		alert(request.status + "\n" + request.responseText);
	}

	return false;
}

function removeFollower(uid) {
	//Gather data
	var params = new Array();
	params['action'] = 'removeFollower';
	params['key'] = getCookie('key');
	params['username'] = getCookie('username');
	params['user_id'] = uid;

	//Send request
	request = picnitRequest(memberurl, params);

	if(request.status === 200) {
	
	}
	else {
		alert(request.status + "\n" + request.responseText);
	}

	return false;
}

