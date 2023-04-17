
const post_id = window.location.href.split('/').pop();
const user_id = window.location.href.split('/')[4];

const updatePost = async (event) => {
  event.preventDefault();
  const title = document.querySelector('#post-title').value.trim();
  const description = document.querySelector('#post-description').value.trim();

  if (title && description) {
    const response = await fetch(`/dashboard/${user_id}/edit-post/${post_id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/dashboard/${user_id}`);
    } else {
      alert('Failed to update');
    }
  }
};

const deletePost = async (event) => {
  event.preventDefault();
  const response = await fetch(`/dashboard/${user_id}/edit-post/${post_id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace(`/dashboard/${user_id}`);
  } else {
    alert('Failed to update.');
  }
};

document.querySelector('#update-post').addEventListener('click', updatePost);
document.querySelector('#delete-post').addEventListener('click', deletePost);





// const addCommentHandler = () => {
//   document.querySelector('#newCommentContainer').style.display = 'block';
//   document.querySelector('#addCommentButton').style.display = 'none';
// };

// const cancelCommentHandler = () => {
//   document.querySelector('#newCommentContainer').style.display = 'none';
//   document.querySelector('#addCommentButton').style.display = 'block';
// };

// const submitCommentHandler = async (event) => {
//   event.preventDefault();
//   const description = document
//     .querySelector('#description-comment')
//     .value.trim();


//   const blogpost_id = window.location.href.split('/').pop();
//   if (description) {
//     const response = await fetch(`/post/${blogpost_id}`, {
//       method: 'POST',
//       body: JSON.stringify({ description }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace(`/`);
//     } else {
//       alert('Failed to comment.');
//     }
//   }
// };

// const deleteCommentHandler = async (event) => {
//   event.preventDefault();
//   const blogpost_id = window.location.href.split('/').pop();
//   const comment_id = event.target.dataset.delete;
//   console.log(comment_id);

//   const response = await fetch(`/post/${blogpost_id}/comment/${comment_id}`, {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     document.location.replace(`/post/${blogpost_id}`);
//   } else {
//     alert('Failed to comment.');
//   }
// };

// document
//   .querySelector('#addComment')
//   .addEventListener('click', addCommentHandler);

// document
//   .querySelector('#cancel-comment')
//   .addEventListener('click', cancelCommentHandler);

// document
//   .querySelector('#submit-comment')
//   .addEventListener('click', submitCommentHandler);

// document
//   .querySelector('#delete-comment')
//   .addEventListener('click', deleteCommentHandler);
