const form = document.querySelector("form");
const email = document.getElementById("email");
const errorIcon = document.querySelector(".error-icon");
const errorText = document.querySelector(".error-text");
const index = "/index.html";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (email.value === "") {
    email.style.borderColor = "#f96262";
    errorIcon.style.display = "block";
    errorText.style.display = "block";
  } else {
    window.location.href = index;
  }
});
