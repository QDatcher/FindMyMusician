const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
    console.log('logged out')
  } else {
    alert(response.statusText);
    console.log('still logged in')
  }
};

document.querySelector('#logout').addEventListener('click', logout);
