var logIn = document.getElementById("logIn");
var signUp = document.getElementById("signUp");

function logInFunction() {
    document.location.replace('/login')
};

logIn.addEventListener("click", logInFunction);

function signUpFunction() {
    document.location.replace('/signup')
};

signUp.addEventListener("click", signUpFunction);
