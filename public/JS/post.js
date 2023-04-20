const submitCommentHandler = async (event) => {
  event.preventDefault();
  const description = document
    .querySelector("#description")
    .value.trim();
    console.log(description);
  const blog_id = window.location.href.split("/").pop();
  if (description) {
    const response = await fetch(`/api/comment/`, {
      method: "POST",
      body: JSON.stringify({ description, blog_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/`);
    } else {
      alert("Failed to comment");
    }
  }
};

const deleteCommentHandler = async (event) => {
  event.preventDefault();
  const blog_id = window.location.href.split("/").pop();
  const comment_id = event.target.dataset.delete;
  console.log(comment_id);

  const response = await fetch(`/post/${blog_id}/comment/${comment_id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(`/post/${blog_id}`);
  } else {
    alert("Failed to comment");
  }
};

document
  .querySelector(".add-comment")
  .addEventListener("submit", submitCommentHandler);

// document
//   .querySelector("#submit-comment")
//   .addEventListener("click", submitCommentHandler);

// document
//   .querySelector("#cancel-comment")
//   .addEventListener("click", cancelCommentHandler);

document
  .querySelector(".delete-comment")
  .addEventListener("click", deleteCommentHandler);
