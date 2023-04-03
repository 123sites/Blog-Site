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

// TOP OR BOTTOM CODE ??????????????????????????????????????????????????????????????

async function deleteComment(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(id);

  const response = await fetch(`/api/comment/${id}`, {
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

document
  .querySelector(".delete-comment-btn")
  .addEventListener("click", deleteComment);

// async function deleteComment(comment_id) {
//   const postId = window.location.pathname.split('/')[2];
//   const response = await fetch(`/api/comments/${comment_id}`, {
//     method: 'DELETE',
//   });

//   if (response.ok) {
//     document.location.replace(`/post/${postId}`);
//   } else {
//     alert(response.statusText);
//   }
// }

// const deleteBtn = document.querySelectorAll('.delete-comment');
// deleteBtn.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     let commentId = btn.dataset.commentId;
//     deleteComment(commentId);
//   });
// });
