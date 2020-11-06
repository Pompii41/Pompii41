'use strict'
const refs = {

  closeModal: document.querySelector(`button[data-action="close-modal"]`),
  openModal: document.querySelector(`button[data-action="open-modal"]`),
  backdropRef: document.querySelector(`.js-backdrop`),
  closeBurger: document.querySelector(`.js-burger`),
  formButton: document.querySelector(`.form__button`),
};

refs.openModal.addEventListener(`click`, onOpenModal);
refs.closeModal.addEventListener(`click`, offOpenModal); 
refs.backdropRef.addEventListener(`click`, onBackDropclick);
// refs.formButton.addEventListener(`submit`, formRef);


function onOpenModal() {
  window.addEventListener(`keybown`, onPressEscape);
  document.querySelector(".backdrop").classList.add(`show-modal`);
  document.querySelector(".burger").classList.add(`js-burger`);
};
function offOpenModal() {
  window.removeEventListener(`keybown`, onPressEscape);
  document.querySelector(".backdrop").classList.remove(`show-modal`);
    document.querySelector(".burger").classList.remove(`js-burger`);
};
function onBackDropclick(event) {
  if (event.target === event.currentTarget) {
    offOpenModal();
  };
};
 function onPressEscape (event) {
if (event.code === `Escape`) {
      offOpenModal();
    };
}
 refs.formButton.addEventListener(`submit`,event => {
   event.defaultPrevented();
   formButton = event.currentTarget;
   const formData = new FormData( formButton);
   formDataObj = {};

   formData.forEach((value,key) => {
     console.log("value:", value);
     console.log("key:", key);
     formDataObj[key] = value;
     
   });
   console.log(formDataObj);
   console.log(formButton.elements);
});
