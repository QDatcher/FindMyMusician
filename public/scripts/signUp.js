

const signUpFormHandler = async (event) => {
    event.preventDefault();

    const first_name = document.getElementById('firstName').value.trim();
    const last_name = document.getElementById('lastName').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const bio = document.getElementById('bio').value.trim();
    const project_links = document.getElementById('link').value.trim();

    if (first_name && last_name && username && email && password) {
        const response = await fetch('/api/users/', {
          method: 'POST',
          body: JSON.stringify({ first_name, last_name, username, email, password, bio, project_links }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            console.log('logged in')
          document.location.replace('/profile');

        } else {
            console.log('not logged in')
          alert(response.statusText);
        }
      }
};

const signupForm = document.getElementById('signUpForm');

signupForm.addEventListener('submit', signUpFormHandler)