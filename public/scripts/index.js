var logIn = document.getElementById("logIn");
var signUp = document.getElementById("signUp");

function logInFunction() {
    window.location.href = "signin.html";
};

logIn.addEventListener("click", logInFunction);

function signUpFunction() {
    window.location.href = "signUp.html";
};

signUp.addEventListener("click", signUpFunction);
