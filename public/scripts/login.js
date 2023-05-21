const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        console.log('logged in')
        document.location.replace('/profile');
      } else {
        
        console.log('not logged in')
        alert(response.statusText);
      }
    }
  };

  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', loginFormHandler)