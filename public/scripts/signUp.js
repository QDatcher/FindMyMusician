

const signUpFormHandler = async (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const bio = document.getElementById('bio').value.trim();
    const project_links = document.getElementById('link').value.trim();

    if (firstName && lastName && username && email && password) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ firstName, lastName, username, email, password, bio, project_links }),
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