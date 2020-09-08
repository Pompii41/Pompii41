const form = document.querySelector(".feedback-form");
const textarea = document.querySelector(".js-feedback-form  input");

form.addEventListener("submit", handleFormSubmit);
textarea.addEventListener("input", handleEmailInput);
function handleFormSubmit(event) {
  event.preventDefault();
  localStorage.removeItem("feedback-message");
  event.currentTarget.reset();
}
function handleEmailInput(event) {
  const message = event.currentTarget.value;
  localStorage.setItem("feedback-massage", message);
}
function populateMessage() {
  const savedMessage = localStorage.getItem("feedback-message");
  if (savedMessage) {
    textarea.value = savedMessage;
  }
}
populateMessage();
