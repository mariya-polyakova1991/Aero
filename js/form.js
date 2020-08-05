var modals = document.getElementById("modals");
const openModalsButton = document.getElementById("buttons-open");
var closeModalsButton = modals.querySelector(".buttons-close");
const commentList = document.getElementById("comments-name");
const commentEmail = document.getElementById("comments-email");
const commentMessage = document.getElementById("comments-message");

const commentField = document.getElementById("comment-field");
const name = document.getElementById("login-field");
const email = document.getElementById("email-field");
const package = document.getElementById("package-field");

openModalsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  commentList.classList.add("comments-list");
  commentEmail.classList.add("comments-list");
  commentMessage.classList.add("comments-list");

  modals.classList.add("modals--show");
  // const textName = document.createTextNode(Your name:  ${name.value},);
  // commentList.append(textName);
  // const textEmail = document.createTextNode(Your email: ${email.value},);
  // commentEmail.append(textEmail);
  // const textMessage = document.createTextNode(Your message: ${commentField.value});
  // commentMessage.append(textMessage);
  commentList.textContent = `
  Your name:  ${name.value} `;
  commentEmail.textContent = `
  Your email: ${email.value} `;
  commentMessage.textContent = `
  Your message: ${commentField.value}`;
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
