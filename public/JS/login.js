async function signupFormH(event) {
  event.preventDefault();

  // The trim() method removes whitespace from both ends of a string and returns a new string,
  // without modifying the original string. To return a new string with whitespace trimmed
  // from just one end, use trimStart() or trimEnd().
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#pw-signup").value.trim();

  if (username && password) {
    const response = await fetch("/api", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // Checks response status
    if (response.ok) {
      console.log("success");
      alert("New user was successfully created. Ready to log in");
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

async function loginFormH(event) {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#pw-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {


      // NEED TO CREATE THE DASHBOARD
      

      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".signup-form").addEventListener("submit", signupFormH);
document.querySelector(".login-form").addEventListener("submit", loginFormH);
