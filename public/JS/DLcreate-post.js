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

// async function newFormHandler(event) {
//   event.preventDefault();

//   const title = document.querySelector('input[name="post-title"]').value;
//   const post_content = document.querySelector(
//     'input[name="post-content"]'
//   ).value;

//   const response = await fetch(`/api/posts`, {
//     method: "POST",
//     body: JSON.stringify({
//       title,
//       contents
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   console.log(response);

//   if (response.ok) {
//     document.location.replace("/dashboard");
//   } else {
//     alert(response.statusText);
//   }
// }
// console.log(newFormHandler);

// document
//   .querySelector(".new-post-form")
//   .addEventListener("submit", newFormHandler);
