const error1 = document.getElementById("errTxt1");
const setError = (element, message) => {
	element.innerText = message;
	element.style.display = "block";
}
const setSuccess = (element, message) => {
	element.innerText = message;
	element.style.display = "block";
	element.style.backgroundColor = "lightgreen";
	element.style.color = "green";
}
var status1 = document.getElementById("status1").value;
if (status1 == "failed") {
	setError(error1, 'Incorrect Username or Password!');
}
var status2 = document.getElementById("status2").value;
if (status2 == "success") {
	setSuccess(error1, 'Account Created');
} else if (status2 == "failed") {
	setError(error1, 'Registration Failed!');
} else if (status2 == "accountExist") {
	setError(error1, 'User is already exists!');
} else if (status2 == "empty") {
	setError(error1, "Fill all the Spaces");
}

//Login-Logout toggle
function hide1() {
	document.querySelector(".hide1").style.display = "block";
	document.querySelector(".hide2").style.display = "none";
}
function hide2() {
	document.querySelector(".hide1").style.display = "none";
	document.querySelector(".hide2").style.display = "block";
}

//Password show or hide for login
const ltogglePassword = document.querySelector("#togglePassword");
const rtogglePassword = document.querySelector("#rtogglePassword");
const rctogglePassword = document.querySelector("#rctogglePassword");
const showHidelpwd = document.querySelector("#lpwd");
const showHiderpwd = document.querySelector("#rpwd");
const showHidercpwd = document.querySelector("#rcpwd");

const showHidePwd = (id) => {
	const type = id.getAttribute("type") === "password" ? "text" : "password";
	id.setAttribute("type", type);
}
ltogglePassword.addEventListener("click", function () {
	showHidePwd(showHidelpwd);
});
rtogglePassword.addEventListener("click", function () {
	showHidePwd(showHiderpwd);
});
rctogglePassword.addEventListener("click", function () {
	showHidePwd(showHidercpwd);
});

//Validation Functions
/*const setError = (element, message) => {
	element.innerText = message;
	element.style.display = "block";
}*/
/*const setSuccess = () => {
	const errorBox = document.querySelector(".error-txt");
	errorBox.style.display = "none";
}*/
/*const isValidEmail = email => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}*/

//Login Form Validation
/*const login = document.getElementById("loginForm");
const error1 = document.getElementById("errTxt1");
const lemail = document.getElementById("lemail");
const lpwd = document.getElementById("lpwd");
login.addEventListener('submit', e =>{
	e.preventDefault();
	validateLoginInputs();
});*/
/*const validateLoginInputs = () =>{
	const lemailValue = lemail.value.trim();
	const lpwdValue = lpwd.value.trim();

	setSuccess();
	if(lemailValue === "" && lpwdValue === ""){
		setError(error1, "Please fill the details!");
	}else if(!isValidEmail(lemailValue)){
		setError(error1, 'Provide a valid Email address');
	}else if(lpwdValue.length < 8){
		setError(error1, 'Password must be atleast 8 character.');
	}
};*/

//Registration Form Validation
/*const register = document.getElementById("registerForm");
const error2 = document.getElementById("errTxt2");
const fname = document.getElementById("fname");
const remail = document.getElementById("remail");
const rpwd = document.getElementById("rpwd");
const rcpwd = document.getElementById("rcpwd");
register.addEventListener('submit', e =>{
	e.preventDefault();
	validateRegisterInputs();
});*/
/*const validateRegisterInputs = () =>{
	const fnameValue = fname.value.trim();
	const remailValue = remail.value.trim();
	const rpwdValue = rpwd.value.trim();
	const rcpwdValue = rcpwd.value.trim();
	
	setSuccess();
	if(fnameValue === "" && remailValue === "" && rpwdValue === "" && rcpwdValue === ""){
		setError(error2,"Please fill the details!");
	}else if(!isValidEmail(remailValue)){
		setError(error2, 'Provide a valid Email address');
	}else if(rpwdValue.length < 8){
		setError(error2, 'Password must be atleast 8 character.');
	}else if(rcpwdValue !== rpwdValue){
		setError(error2, "Passwords doesn't match");
	}
};*/
