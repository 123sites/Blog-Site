const addCommentHandler = () => {
  document.querySelector('#new-comment').style.display = 'block';
  document.querySelector('#add-comment-btn').style.display = 'none';
};

const cancelCommentHandler = () => {
  document.querySelector('#new-comment').style.display = 'none';
  document.querySelector('#add-comment-btn').style.display = 'block';
};

const submitCommentHandler = async (event) => {
  event.preventDefault();
  const description = document
    .querySelector('#comment-desc')
    .value.trim();
  const blog_id = window.location.href.split('/').pop();
  if (description) {
    const response = await fetch(`/post/${blog_id}`, {
      method: 'POST',
      body: JSON.stringify({ description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/`);
    } else {
      alert('Failed to comment');
    }
  }
};

const deleteCommentHandler = async (event) => {
  event.preventDefault();
  const blog_id = window.location.href.split('/').pop();
  const comment_id = event.target.dataset.delete;
  console.log(comment_id);

  const response = await fetch(`/post/${blog_id}/comment/${comment_id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace(`/post/${blog_id}`);
  } else {
    alert('Failed to comment');
  }
};

document
  .querySelector('#add-comment')
  .addEventListener('click', addCommentHandler);

document
  .querySelector('#cancel-comment')
  .addEventListener('click', cancelCommentHandler);

document
  .querySelector('#submit-comment')
  .addEventListener('click', submitCommentHandler);

document
  .querySelector('#delete-comment')
  .addEventListener('click', deleteCommentHandler);