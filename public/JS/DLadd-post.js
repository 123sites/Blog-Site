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

// // Goes to dashboard template.
// const addPostForm = document.getElementById('addPost-form');

// async function newPostHandler(event) {
//   event.preventDefault();

//   // Extract the values from the form.
//   const post_title = document.getElementById('add-post-title').value;
//   const post_desc = document.getElementById('add-post-desc').value;
//   const addPostStatusEl = document.getElementById('addpost-status');
//   if (post_title.length <= 4 || post_desc.length <= 4) {
//     // If any add post input value is under 4 character length, notify the user and restrict submission.
//     addPostStatusEl.textContent =
//       'Please make all inputs are filled with character count above 4';
//     addPostStatusEl.style.color = 'red';
//     setTimeout(() => {
//       addPostStatusEl.textContent =
//         'Fill in all required inputs with character count above 4';
//       addPostStatusEl.style.color = 'black';
//     }, 4000);
//   } else {
//     // Execute the fetch using above values and insert them into the body (to be extracted in the route i.e. req.body.post_title)
//     const response = await fetch(`/api/posts`, {
//       method: 'POST',
//       body: JSON.stringify({
//         post_title,
//         post_desc,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     // If the response is ok, simply refresh the page
//     if (response.ok) {
//       addPostStatusEl.textContent = 'Successfully posted, refreshing...';
//       addPostStatusEl.style.color = 'Green';
//       setTimeout(() => {
//         document.location.replace('/dashboard');
//       }, 750);
//     } else {
//       // Otherwise alert the user accordingly
//       alert(response.statusText);
//     }
//   }
// }

// Add the event handler for the form submission
// addPostForm.addEventListener('submit', newPostHandler);
// async function editFormHandler(event) {
//   event.preventDefault();

//   const title = document.querySelector('input[name="post-title"]').value;
//   const post_text = document.querySelector('textarea[name="post-text"]').value;
//   const id = window.location.toString().split('/')[
//     window.location.toString().split('/').length-1
//   ];

//   const response = await fetch(`/api/posts/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify({
//       title,
//       post_text
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   if (response.ok) {
//     document.location.replace('/dashboard/');
//   } else {
//     alert(response.statusText);
//   }
// }

// document.querySelector('.edit-post').addEventListener('submit', editFormHandler);

// async function commentFormHandler(event) {
//   event.preventDefault();

//   const comment_text = document
//     .querySelector('textarea[name="comment-body"]')
//     .value.trim();

//   const post_id = window.location.toString().split("/")[
//     window.location.toString().split("/").length - 1
//   ];
//   console.log(post_id);

//   if (comment_text) {
//     const response = await fetch("/api/comments", {
//       method: "POST",
//       body: JSON.stringify({
//         title,
//         content
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     console.log(response);

//     if (response.ok) {
//       document.location.reload();
//     } else {
//       alert(response.statusText);
//     }
//   }
// }
// console.log(commentFormHandler);

// document
//   .querySelector(".comment-form")
//   .addEventListener("submit", commentFormHandler);

// async function newFormHandler(event) {
//   event.preventDefault();

//   const title = document.querySelector('input[name="post-title"]').value;
//   const post_text = document.querySelector('textarea[name="post-text"]').value;

//   const response = await fetch(`/api/posts`, {
//     method: 'POST',
//     body: JSON.stringify({
//       title,
//       content
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   if (response.ok) {
//     document.location.replace('/dashboard');
//   } else {
//     alert(response.statusText);
//   }
// }

// document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
