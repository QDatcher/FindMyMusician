//Getting necessary elements from the HTML to the JS
var username = document.getElementById("username");
var accountInfo = document.getElementById("accountInfo");

var home = document.getElementById("logIn");
var myAccount = document.getElementById("signUp");

function homePage() {
    window.location.href = "/views/index.handlebars";
};
home.addEventListener("click", homePage);

function myAccount() {
    windows.location.href = "/views/account.handlebars";
};
myAccount.addEventListener("click", myAccount);
