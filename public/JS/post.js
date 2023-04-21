const addCommentHandler = async (event) => {

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

document.querySelector(".add-comment")
  .addEventListener("submit", addCommentHandler);

// document.querySelector('.add-comment')
// .addEventListener('click', submitCommentHandler);
// // .addEventListener('click', updatePost);

// // document.querySelector("#submit-comment")
// //   .addEventListener("submit", commentFormHandler);
// const submitCommentHandler = async (event) => {
//   event.preventDefault();
//   const description = document
//     .querySelector("#description")
//     .value.trim();
//     console.log(description);
//   const blog_id = window.location.href.split("/").pop();
//   if (description) {
//     const response = await fetch(`/api/comment`, {
//     // const response = await fetch(`/api/comment/`, {
//       method: "POST",
//       body: JSON.stringify({ description, blog_id }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace(`/`);
//     } else {
//       alert("Failed to comment");
//     }
//   }
// };



// document.querySelector('.add-comment')
// .addEventListener('click', submitCommentHandler);
// // .addEventListener('click', updatePost);

// // document.querySelector("#submit-comment")
// //   .addEventListener("submit", commentFormHandler);


