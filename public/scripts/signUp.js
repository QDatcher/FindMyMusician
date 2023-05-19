const signUpFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const bio = document.getElementById('bio').value.trim();
  const link = document.getElementById('link').value.trim();

  if (firstName && lastName && username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, username, email, password, bio, link }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
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