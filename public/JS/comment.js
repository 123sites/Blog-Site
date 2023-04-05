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

const commentFormHandler = async function (event) {
  event.preventDefault();

  const blog_id = document.querySelector(".new-comment-form").dataset.blogid;

  const comment_description = document
    .querySelector("#comment_description")
    .value.trim();
  console.log(comment_description);

  if (comment_description) {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        blog_id,
        comment_description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    document.location.reload();
  }
};
console.log(commentFormHandler);

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", commentFormHandler);

// to save it in the database
// const commentFormHandler = async (event) => {
// 	// The preventDefault() method of the Event interface
//   	// tells the user agent that if the event does not get explicitly handled,
//   	// its default action should not be taken as it normally would be.
// 	event.preventDefault();
// 	// this is the body text inside the "input" tag field on the page
// 	const comment_body = document.querySelector('input[name="comment-body"]').value.trim();
// 	// this hack grabs the post ID number from the end of the URL
// 	const post_id = window.location.toString().split("/")[window.location.toString().split("/").length - 1];
// 	// check the content body to not be NULL
// 	if (comment_body) {
// 		// do a fetch with comment data to the "Comment" API
// 		const response = await fetch("/api/comments", {
// 			method: "POST",
// 			body: JSON.stringify({
// 				post_id,
// 				comment_body,
// 			}),
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		});
// 		// if the action is successful, then refresh the page with new data
// 		if (response.ok) {
// 			document.location.reload();
// 		} else {
// 			alert(response.statusText);
// 			document.querySelector("#comment-form").style.display = "block";
// 		}
// 	}
// };

// // add the 'Event Listeners' to the page
// document.querySelector(".comment-form").addEventListener("submit", commentFormHandler);

// const commentFormHandler = async function (event) {
// 	event.preventDefault();

// 	const blog_id = document.querySelector('.new-comment-form').dataset.blogid;

// 	const comment_description = document.querySelector('#comment_description').value.trim();

// 	if (comment_description) {
// 		await fetch('/api/comments', {
// 			method: 'POST',
// 			body: JSON.stringify({
// 				blog_id,
// 				comment_description,
// 			}),
// 			headers: {
// 				'Content-Type': 'application/json'
// 			}
// 		});
// 		document.location.reload();
// 	}
// };

// document
// 	.querySelector('.new-comment-form')
// 	.addEventListener('submit', commentFormHandler);

// // Goes to single-post

// async function addComment(newComment, postId) {
//   const response = await fetch(`/api/comments/${postId}`, {
//     method: 'POST',
//     body: JSON.stringify({
//       comment_text: newComment,
//       post_id: postId,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   if (response.ok) {
//     document.location.replace(`/post/${postId}`);
//   } else {
//     alert(response.statusText);
//   }
// }

// const newCommentHandler = (event) => {
//   event.preventDefault();

//   // Extract the values from the form
//   const comment_text = document.getElementById('comment-field').value;
//   const commentStatusEl = document.getElementById('comment-status');

//   if (comment_text.length <= 4) {
//     // If any add post input value is under 4 character length, notify the user and restrict submission
//     commentStatusEl.textContent =
//       'Please make sure the comment contains character count above 4';
//     commentStatusEl.style.color = 'red';
//     setTimeout(() => {
//       commentStatusEl.textContent = 'Required character count above 4';
//       commentStatusEl.style.color = 'black';
//     }, 4000);
//   } else {
//     commentStatusEl.textContent = 'Successfully posted... refreshing';
//     commentStatusEl.style.color = 'Green';
//     // Extract the post id via the active web url
//     const postId = window.location.pathname.split('/')[2];
//     // After 1 second, add the comment to the database
//     setTimeout(() => {
//       addComment(comment_text, postId);
//     }, 750);
//   }
// };

// // Add the event handler for the form submission
// addCommentForm.addEventListener('submit', newCommentHandler);

// // async function commentFormHandler(event) {
// //   event.preventDefault();

// //   const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

// //   const post_id = window.location.toString().split('/')[
// //     window.location.toString().split('/').length - 1
// //   ];

// //   if (comment_text) {
// //     const response = await fetch('/api/comments', {
// //       method: 'POST',
// //       body: JSON.stringify({
// //         post_id,
// //         content
// //       }),
// //       headers: {
// //         'Content-Type': 'application/json'
// //       }
// //     });

// //     if (response.ok) {
// //       document.location.reload();
// //     } else {
// //       alert(response.statusText);
// //     }
// //   }
// // }

// // document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);

// async function commentFormHandler(event) {
//   event.preventDefault();

//   const comment_text = document
//     .querySelector('textarea[name="comment-body"]')
//     .value.trim();

//   const post_id = window.location.toString().split("/")[
//     window.location.toString().split("/").length - 1
//   ];

//   if (comment_text) {
//     const response = await fetch("/api/comments", {
//       method: "POST",
//       body: JSON.stringify({
//         post_id,
//         content,
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
//   console.log(commentFormHandler);
// }

// document
//   .querySelector(".comment-form")
//   .addEventListener("submit", commentFormHandler);
