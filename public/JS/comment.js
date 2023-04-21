const commentFormHandler = async function (event) {
  event.preventDefault();
  const blog_id = document.querySelector(".add-comment").dataset.blogid;

  const comment_description = document
    .querySelector("#description")
    .value.trim();
  console.log(comment_description);

  if (comment_description) {
    await fetch("/api/comment", {
    // await fetch("/api/comments", {
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

document
  .querySelector("#submit-comment")
  .addEventListener("submit", commentFormHandler);
