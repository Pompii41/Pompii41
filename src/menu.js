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


const inputJsRef = document.querySelector(`.js__ref`);
const outPut =  document.querySelector(`.js__input`);
let total = 0;
const inputDebountCallBack = _.debounce (event => {
  total = +1;
  inputJsRef.textContent = `${event.target.value}`;
  
},300);

outPut.addEventListener(`input`, inputDebountCallBack);