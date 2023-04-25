// Goes to login template
const loginFormHandler = async (event) => {

  event.preventDefault();
  console.log(event);
  
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  console.log(username, password)

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)
    
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      document.location.replace(`/dashboard/${data.user.id}`);
    } else {
      alert('Failed to log in');
    }
  }
};

console.log("login.js loaded")
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);