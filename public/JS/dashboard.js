const addPostHandler = () => {
  document.querySelector("#add-post").style.display = "none";
  document.querySelector("#blog").style.display = "none";
  document.querySelector("#add-post-container").style.display = "block";
};

const postFormHandler = async (event) => {
  event.preventDefault();
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

document
  .querySelector(".new-blog-form")
  .addEventListener("submit", postFormHandler);

// document.querySelector("#add-post").addEventListener("click", addPostHandler);
