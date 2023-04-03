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

// TOP OR BOTTOM CODE?????????????????????????????????????????????????????????????????????????????????

async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      post_id: id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}
console.log("delete-post.js");

document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteFormHandler);

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
