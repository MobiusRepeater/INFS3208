//Log in function
function fnLogin() {
	let Userpassword = document.getElementById("password-input")
	let infobox = document.getElementById("log-info")
	let accountinput = document.getElementById("account-input")
	var issuceesfully = false;   

	if (accountinput.value == "") {
		infobox.innerHTML = "Please enter your id!";
	} 
	else if (Userpassword.value == "") {
		infobox.innerHTML = "Please enter your password!";
	} 
	else {
		issuceesfully = true;
	}
	if (login) {
		window.alert("Welcome!")
	}

}

