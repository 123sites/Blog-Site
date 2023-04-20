
const addPostHandler = () => {
  document.querySelector("#add-post").style.display = "none";
  document.querySelector("#blog").style.display = "none";
  document.querySelector("#add-post-container").style.display = "block";
};

const postFormHandler = async (event) => {
  event.preventDefault();
  // Or newComment or blogData??????
  const title = document.querySelector("#blog-title").value.trim();
  const description = document.querySelector("#blog-description").value.trim();

  if (title && description) {
    const response = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
      
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Not able to post.");
    }
  }
};

// document.querySelector("#add-post").style.display = "block";
// document.querySelector("#blog").style.display = "block";
// document.querySelector("#add-post-container").style.display = "none";

const post_id = window.location.href.split('/').pop();
const user_id = window.location.href.split('/')[4];

const updatePost = async (event) => {
  event.preventDefault();
  const title = document.querySelector('#title-post').value.trim();
  const description = document.querySelector('#description-post').value.trim();

  if (title && description) {
    const response = await fetch(`/dashboard/${user_id}/editpost/${post_id}`, {
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
    alert('Failed to update');
  }
};

document.querySelector('#post-update').addEventListener('click', updatePost);

document.querySelector('#post-delete').addEventListener('click', deletePost);
document.querySelector('#add-post').addEventListener('click', updatePost);
document.querySelector('#delete-post').addEventListener('click', deletePost);

document
  .querySelector(".post-form")
  .addEventListener("submit", postFormHandler);

// document.querySelector("#add-post").addEventListener("click", addPostHandler);
