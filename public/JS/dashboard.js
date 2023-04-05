const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blog-title").value.trim();

  const description = document.querySelector("#blog-desc").value.trim();

  if (title && description) {
    const response = await fetch(`/api/blogs`, {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create blog");
    }
  }
};
console.log("After newFormHandler, before delButtonHandler");

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete blog");
    }
  }
};
console.log("After delButtonHandler, before event listeners");

document
  .querySelector(".new-blog-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".blog-list")
  .addEventListener("click", delButtonHandler);

// const newFormHandler = async (event) => {
// 	event.preventDefault();

// 	const title = document.querySelector('#blog-title').value.trim();

// 	const description = document.querySelector('#blog-desc').value.trim();

// 	if (title && description) {
// 		const response = await fetch(`/api/blogs`, {
// 			method: 'POST',
// 			body: JSON.stringify({ title, description }),
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		});

// 		if (response.ok) {
// 			document.location.replace('/dashboard');
// 		} else {
// 			alert('Failed to create blog');
// 		}
// 	}
// };

// const delButtonHandler = async (event) => {
// 	if (event.target.hasAttribute('data-id')) {
// 		const id = event.target.getAttribute('data-id');

// 		const response = await fetch(`/api/blogs/${id}`, {
// 			method: 'DELETE',
// 		});

// 		if (response.ok) {
// 			document.location.replace('/dashboard');
// 		} else {
// 			alert('Failed to delete blog');
// 		}
// 	}
// };

// document
// 	.querySelector('.new-blog-form')
// 	.addEventListener('submit', newFormHandler);

// document
// 	.querySelector('.blog-list')
//   .addEventListener('click', delButtonHandler);

// // Click on header logo, redirects to the main page.
// const headerLogoEl = document.getElementById('header-logo');
// headerLogoEl.addEventListener('click', () => {
//   document.location.replace('/');
// });

// // Highlights the active nav item.
// const navItems = document.querySelectorAll('.navItem');

// if (navItems.length == 2) {
//   if (window.location.pathname == '/') {
//     navItems[0].classList.add('active');
//   }
//   if (window.location.pathname == '/login') {
//     navItems[1].classList.add('active');
//   }
// } else {
//   if (window.location.pathname == '/') {
//     navItems[0].classList.add('active');
//   }
//   if (window.location.pathname == '/dashboard') {
//     navItems[1].classList.add('active');
//   }
//   if (window.location.pathname == '/login') {
//     navItems[2].classList.add('active');
//   }
// }

// // Updates header styling based on if a certain element exist
// const headerHead = document.getElementById('header-head');
// const loggedInActive = document.getElementById('loggedin');
// if (loggedInActive) {
//   headerHead.style.justifyContent = 'space-between';
// } else {
//   headerHead.style.justifyContent = 'center';
// }

// var existingBlogs = document.querySelector("#existingBlogs")
// var createNew = document.querySelector("#createNew")
// var newPost = document.querySelector("#newPost")
// var newBlog = document.querySelector('#newBlog')

// function hideCreateNew() {
//     createNew.hidden=true;
// }
// hideCreateNew();

// newPost.addEventListener("submit",event=>{
//     event.preventDefault()
//     console.log('click')
//     existingBlogs.hidden=true;
//     newPost.hidden =true;
//     createNew.hidden =false;
// });

// newBlog.addEventListener("submit", event => {
//     var title = document.querySelector("#title").value;
//     var content = document.querySelector("#content").value
//     event.preventDefault()
//     console.log('newBlog')
//     if (!title || !content) {
//         alert('Please enter both title and content.')
//         return;
//     }
//     const blogObj = {
//         title: title,
//         content: description,
//         date_created: date_created
//     }
//     fetch("/api/blogs",{
//         method:"POST",
//         body:JSON.stringify(blogObj),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     }).then(res=>{
//         if(res.ok){
//             createNew.setAttribute("hidden", "false")
//             location.reload()
//         } else {
//             alert("Error, please try again.")
//         }
//     })
// })
