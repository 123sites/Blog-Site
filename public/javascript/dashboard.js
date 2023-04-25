const addPostHandler = () => {
  document.querySelector("#add-post").style.display = "none";
  document.querySelector("#blog").style.display = "none";
  document.querySelector("#add-post-container").style.display = "block";
};

const postFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const description = document.querySelector("#post-description").value.trim();

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

const post_id = window.location.href.split('/').pop();
const user_id = window.location.href.split('/')[4];

const updatePost = async (event) => {
  event.preventDefault();
  const title = document.querySelector('#post-title').value.trim();
  const description = document.querySelector('#post-description').value.trim();

  if (title && description) {
    const response = await fetch(`/api/dashboard/${user_id}/edit-post/${post_id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/api/dashboard/${user_id}`);
    } else {
      alert('Failed to update');
    }
  }
};

document.querySelector('#blog').addEventListener('click', updatePost);

document
  .querySelector(".post-form")
  .addEventListener("submit", postFormHandler);


