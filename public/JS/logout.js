// Click on the logout option in the navigation, I'm signed out of the site.
// When idle on the site for more than a set time, I'm able to view comments but I am prompted to log in again 
// before I can add, update, or delete comments.

async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });
console.log(response);

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}
console.log("logout.js");

document.querySelector('#logout').addEventListener('click', logout);