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

// // to delete it from the database
// const deleteFormHandler = async (event) => {
//   // The preventDefault() method of the Event interface
//   // tells the user agent that if the event does not get explicitly handled,
//   // its default action should not be taken as it normally would be.
//   event.preventDefault();
//   // this hack grabs the post ID number from the end of the URL
//   const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
//   // do a fetch with the post ID to the Posts API
//   const response = await fetch(`/api/posts/${id}`, {
//       method: 'DELETE',
//       body: JSON.stringify({
//           post_id: id
//       }),
//       headers: {
//           'Content-Type': 'application/json'
//       }
//   });
//   // if the operation is successful, navigate back to the 'Dashboard' page
//   if (response.ok) {
//       document.location.replace('/api/dashboard/');
//   } else {
//       alert(response.statusText);
//   }
// };

// // add the 'Event Listeners' to the page
// document.querySelector('.btnDeletePost').addEventListener('click', deleteFormHandler);









// const posts = document.querySelectorAll('.delete-post-id');

// async function deletePost(id) {
//   const response = await fetch(`/api/posts/${id}`, {
//     method: 'DELETE',
//   });

//   if (response.ok) {
//     document.location.replace('/dashboard');
//   } else {
//     alert(response.statusText);
//   }
// }

// posts.forEach((post) => {
//   post.addEventListener('click', () => {
//     deletePost(post.dataset.postId);
//   });
// });










// async function deleteFormHandler(event) {
//   event.preventDefault();

//   const id = window.location.toString().split('/')[
//     window.location.toString().split('/').length-1
//   ];

//   const response = await fetch(`/api/posts/${id}`, {
//     method: 'DELETE',    
//   });    

//   if (response.ok) {
//     document.location.replace('/dashboard/');
//   } else {
//     alert(response.statusText);
//   }
// }

// document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);




// async function deleteFormHandler(event) {
//   event.preventDefault();

//   const id = window.location.toString().split("/")[
//     window.location.toString().split("/").length - 1
//   ];

//   const response = await fetch(`/api/posts/${id}`, {
//     method: "DELETE",
//     body: JSON.stringify({
//       title,
//       contents,
//       username,
//       date_created,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   console.log(response);

//   if (response.ok) {
//     document.location.replace("/dashboard/");
//   } else {
//     alert(response.statusText);
//   }
// }
// console.log("delete-post.js");

// document
//   .querySelector(".delete-post-btn")
//   .addEventListener("click", deleteFormHandler);

// const posts = document.querySelectorAll('.delete-post-id');

// async function deletePost(id) {
//   const response = await fetch(`/api/posts/${id}`, {
//     method: 'DELETE',
//   });

//   if (response.ok) {
//     document.location.replace('/dashboard');
//   } else {
//     alert(response.statusText);
//   }
// }
// console.log(deletePost);

// posts.forEach((post) => {
//   post.addEventListener('click', () => {
//     deletePost(post.dataset.postId);
//   });
// });
// console.log("delete-post.js");
