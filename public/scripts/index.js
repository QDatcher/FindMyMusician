var logIn = document.getElementById("logIn");
var signUp = document.getElementById("signUp");

function logInFunction() {
    window.location.href = "/views/";
};

logIn.addEventListener("click", logInFunction);

function signUpFunction() {
    window.location.href = "/views/signUp.handlebars";
};

signUp.addEventListener("click", signUpFunction);
