


const closeModal = document.querySelector(`button[data-action="close-modal"]`);
const openModal = document.querySelector(`button[data-action="open-modal"]`);
const backdropRef=document.querySelector(`.js-backdrop`)

openModal.addEventListener(`click`, onOpenModal) 
 closeModal.addEventListener(`click`, offOpenModal) 
 backdropRef.addEventListener(`click`, onBackDropclick )


function onOpenModal() {
  window.addEventListener(`keybown`, event => {
    if (event.code === `Escape`) {
      offOpenModal();
    };
  });
 document.querySelector(".backdrop").classList.add(`show-modal`);
};
function offOpenModal(){
 document.querySelector(".backdrop").classList.remove(`show-modal`);
};
function onBackDropclick(event) {
  if (event.target === event.currentTarget) {
   offOpenModal()
  }
};