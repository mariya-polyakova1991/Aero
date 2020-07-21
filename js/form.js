var modals = document.getElementById("modals");
const openModalsButton = document.getElementById("buttons-open");
var closeModalsButton = modals.querySelector(".buttons-close");
const commentList = document.getElementById("comments-list");
const commentField = document.getElementById("comment-field");
const name = document.getElementById("login-field");
const email = document.getElementById("email-field");
const package = document.getElementById("package-field");

openModalsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modals.classList.add("modals--show");
  console.log("hello");
  commentList.classList.add("comments-list");
  commentList.textContent =
    "Your name: " +
    name.value +
    ", Your email: " +
    email.value +
    ", Your message: " +
    commentField.value;

  name.value = "";
  email.value = "";
  commentField.value = "";
});

closeModalsButton.addEventListener("click", function () {
  modals.classList.remove("modals--show");
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    modals.classList.remove("modals--show");
  }
});
