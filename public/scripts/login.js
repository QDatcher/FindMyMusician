const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

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