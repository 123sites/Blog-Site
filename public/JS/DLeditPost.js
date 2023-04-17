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

// const post_id = window.location.href.split('/').pop();
// const user_id = window.location.href.split('/')[4];

// const updatePost = async (event) => {
//   event.preventDefault();
//   const title = document.querySelector('#title-post').value.trim();
//   const description = document.querySelector('#description-post').value.trim();

//   if (title && description) {
//     const response = await fetch(`/dashboard/${user_id}/editpost/${post_id}`, {
//       method: 'PUT',
//       body: JSON.stringify({ title, description }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace(`/dashboard/${user_id}`);
//     } else {
//       alert('Failed to update');
//     }
//   }
// };

// const deletePost = async (event) => {
//   event.preventDefault();
//   const response = await fetch(`/dashboard/${user_id}/editpost/${post_id}`, {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     document.location.replace(`/dashboard/${user_id}`);
//   } else {
//     alert('Failed to update');
//   }
// };

// document.querySelector('#post-update').addEventListener('click', updatePost);

// document.querySelector('#post-delete').addEventListener('click', deletePost);






// const post_id = window.location.href.split('/').pop();
// const user_id = window.location.href.split('/')[4];

// const updatePost = async (event) => {
//   event.preventDefault();
//   const title = document.querySelector('#title-post').value.trim();
//   const description = document.querySelector('#description-post').value.trim();

//   if (title && description) {
//     const response = await fetch(`/dashboard/${user_id}/editpost/${post_id}`, {
//       method: 'PUT',
//       body: JSON.stringify({ title, description }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace(`/dashboard/${user_id}`);
//     } else {
//       alert('Failed to update');
//     }
//   }
// };

// const deletePost = async (event) => {
//   event.preventDefault();
//   const response = await fetch(`/dashboard/${user_id}/editpost/${post_id}`, {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     document.location.replace(`/dashboard/${user_id}`);
//   } else {
//     alert('Failed to update');
//   }
// };

// document.querySelector('#post-update').addEventListener('click', updatePost);
// document.querySelector('#post-delete').addEventListener('click', deletePost);
