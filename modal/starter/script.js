'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', function () {
    console.log('button clicket'); // klick buton
    modal.classList.remove('hidden'); // tabela
    overlay.classList.remove('hidden'); // bluri posht tabeles
  });

//funksjon per mbylljen e modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal); // per mbylljen e modal tek X

overlay.addEventListener('click', closeModal); //per mbylljen e modal duke clikuar jasht korrnizes

//mbylljen e modal duke shtypur esc
// per tu rishikuar!!!!
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
