


const closeModal = document.querySelector(`button[data-action="close-modal"]`);
const openModal = document.querySelector(`button[data-action="open-modal"]`);
const backdropRef=document.querySelector(`.js-backdrop`)
const closeBurger = document.querySelector(`.js-burger`)

openModal.addEventListener(`click`, onOpenModal) 
 closeModal.addEventListener(`click`, offOpenModal) 
backdropRef.addEventListener(`click`, onBackDropclick)
 closeBurger.addEventListener(`click`, onCloseBurger )
 

function onOpenModal() {
  window.addEventListener(`keybown`, onPressEscape);
  document.querySelector(".backdrop").classList.add(`show-modal`);
  document.querySelector(".burger").classList.add(`js-burger`);
};
function offOpenModal(){
  document.querySelector(".backdrop").classList.remove(`show-modal`);
    document.querySelector(".burger").classList.remove(`js-burger`);
};
function onBackDropclick(event) {
  if (event.target === event.currentTarget) {
   offOpenModal()
  }
};
 function onPressEscape (event) {
if (event.code === `Escape`) {
      offOpenModal();
    };
}