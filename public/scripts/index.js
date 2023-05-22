var logIn = document.getElementById("logIn");
var signUp = document.getElementById("signUp");
var logout = document.getElementById("logout");

function logInFunction() {
    document.location.replace('/login')
};

logIn.addEventListener("click", logInFunction);

function signUpFunction() {
    document.location.replace('/signup')
};

signUp.addEventListener("click", signUpFunction);

function logoutFunction() {
    document.location.replace('/logout')
};

logout.addEventListener("click", logoutFunction);
