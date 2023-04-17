const addPostHandler = () => {
  document.querySelector("#add-post").style.display = "none";
  document.querySelector("#blog").style.display = "none";
  document.querySelector("#add-post-container").style.display = "block";
};

const postFormHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#post-title").value.trim();
  const description = document.querySelector("#post-description").value.trim();
  const id = window.location.href.split("/").pop();

  if (title && description) {
    const response = await fetch("/dashboard", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/dashboard/${id}`);
    } else {
      alert("Not able to post.");
    }
  }
};
document.querySelector("#add-post").style.display = "block";
document.querySelector("#blog").style.display = "block";
document.querySelector("#add-post-container").style.display = "none";

document
  .querySelector(".post-form")
  .addEventListener("submit", postFormHandler);

document.querySelector("#add-post").addEventListener("click", addPostHandler);
