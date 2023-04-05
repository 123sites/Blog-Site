// Enter a comment and click on the submit button while signed in.
// Comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

// Click on the dashboard option in the navigation, I am taken to the dashboard and presented with any blog posts
// I have already created and the option to add a new blog post. Click on the button to add a new blog post.
// I am prompted to enter both a title and contents for my blog post.
// I click on the button to create a new blog post.
// The title & contents of my post are saved and I am taken back to an updated dashboard with my new blog post.

// Click on one of my existing posts in the dashboard, I'm able to delete or update my post & taken back to an updated dashboard.
// Click on the logout option in the navigation, I'm signed out of the site.
// When idle on the site for more than a set time, I'm able to view comments but I am prompted to log in again
// before I can add, update, or delete comments.

// Revisit site at a later time and choose to sign in, prompted to enter un & pw & signed-in.
// If not signed in, prompted to sign up.
//
// I see navigation links for the homepage, the dashboard, and the option to log out

// I click on homepage option in navigation, I am taken to the homepage & presented with
// existing blog posts that include the post title and the date created.

// Goes to login template
async function loginFormHandler(event) {
  event.preventDefault();
  // The trim() method removes whitespace from both ends of a string and returns a new string,
  // without modifying the original string. To return a new string with whitespace trimmed
  // from just one end, use trimStart() or trimEnd().
  // Collect values from the login form.
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
}

// Goes to login template
const signupFormHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};
console.log(signupFormHandler);
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

//   if (email && password) {
//     // Send a POST request to the API endpoint.
//     const response = await fetch("/api/users/login", {
//       method: "post",
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//       headers: { "Content-Type": "application/json" },
//     });
//     console.log(response);

//     if (response.ok) {
//       // If successful, redirect the browser to the profile page.
//       document.location.replace("/dashboard");
//     } else {
//       alert(response.statusText);
//     }
//   }
// }
// console.log(loginFormHandler);

// document
//   .querySelector(".login-form")
//   .addEventListener("submit", loginFormHandler);
